# 如何解密本机SecureCRT保存的密码

今天查看一台服务器的，发现登陆不了，可能是防火墙误操作了，需要去机房操作。

之前用securecrt成功登陆过，所以本机的配置文件是保存密码了，需要用python来解密

## 一.查找配置文件

![image-20221102132755681](https://imgoss.xgss.net/picgo/image-20221102132755681.png?aliyun)



找到配置文件打开

![image-20221102132903604](https://imgoss.xgss.net/picgo/image-20221102132903604.png?aliyun)



## 二、安装python3和解密文件

1.安装python：

官网下载 https://www.python.org/downloads/

再编辑文件

参考： https://github.com/HyperSine/how-does-SecureCRT-encrypt-password



SecureCRT 中的密码进行了加密，需要解码才能得到对应的明文，这是使用python解密

使用pip 安装Crypto模块

```
pip3 install pycryptodome
```



编写python解码文件decrypt.py

下载文件： https://raw.githubusercontent.com/HyperSine/how-does-SecureCRT-encrypt-password/master/python3/SecureCRTCipher.py

```
新建文件
# vim SecureCRTCipher.py
```

内容文件：

```
#!/usr/bin/env python3
#https://github.com/HyperSine/how-does-SecureCRT-encrypt-password
import os
from Crypto.Hash import SHA256
from Crypto.Cipher import AES, Blowfish

class SecureCRTCrypto:

    def __init__(self):
        '''
        Initialize SecureCRTCrypto object.
        '''
        self.IV = b'\x00' * Blowfish.block_size
        self.Key1 = b'\x24\xA6\x3D\xDE\x5B\xD3\xB3\x82\x9C\x7E\x06\xF4\x08\x16\xAA\x07'
        self.Key2 = b'\x5F\xB0\x45\xA2\x94\x17\xD9\x16\xC6\xC6\xA2\xFF\x06\x41\x82\xB7'

    def Encrypt(self, Plaintext : str):
        '''
        Encrypt plaintext and return corresponding ciphertext.
        Args:
            Plaintext: A string that will be encrypted.
        Returns:
            Hexlified ciphertext string.
        '''
        plain_bytes = Plaintext.encode('utf-16-le')
        plain_bytes += b'\x00\x00'
        padded_plain_bytes = plain_bytes + os.urandom(Blowfish.block_size - len(plain_bytes) % Blowfish.block_size)

        cipher1 = Blowfish.new(self.Key1, Blowfish.MODE_CBC, iv = self.IV)
        cipher2 = Blowfish.new(self.Key2, Blowfish.MODE_CBC, iv = self.IV)
        return cipher1.encrypt(os.urandom(4) + cipher2.encrypt(padded_plain_bytes) + os.urandom(4)).hex()

    def Decrypt(self, Ciphertext : str):
        '''
        Decrypt ciphertext and return corresponding plaintext.
        Args:
            Ciphertext: A hex string that will be decrypted.
        Returns:
            Plaintext string.
        '''

        cipher1 = Blowfish.new(self.Key1, Blowfish.MODE_CBC, iv = self.IV)
        cipher2 = Blowfish.new(self.Key2, Blowfish.MODE_CBC, iv = self.IV)
        ciphered_bytes = bytes.fromhex(Ciphertext)
        if len(ciphered_bytes) <= 8:
            raise ValueError('Invalid Ciphertext.')
        
        padded_plain_bytes = cipher2.decrypt(cipher1.decrypt(ciphered_bytes)[4:-4])
        
        i = 0
        for i in range(0, len(padded_plain_bytes), 2):
            if padded_plain_bytes[i] == 0 and padded_plain_bytes[i + 1] == 0:
                break
        plain_bytes = padded_plain_bytes[0:i]

        try:
            return plain_bytes.decode('utf-16-le')
        except UnicodeDecodeError:
            raise(ValueError('Invalid Ciphertext.'))

class SecureCRTCryptoV2:

    def __init__(self, ConfigPassphrase : str = ''):
        '''
        Initialize SecureCRTCryptoV2 object.
        Args:
            ConfigPassphrase: The config passphrase that SecureCRT uses. Leave it empty if config passphrase is not set.
        '''
        self.IV = b'\x00' * AES.block_size
        self.Key = SHA256.new(ConfigPassphrase.encode('utf-8')).digest()

    def Encrypt(self, Plaintext : str):
        '''
        Encrypt plaintext and return corresponding ciphertext.
        Args:
            Plaintext: A string that will be encrypted.
        Returns:
            Hexlified ciphertext string.
        '''
        plain_bytes = Plaintext.encode('utf-8')
        if len(plain_bytes) > 0xffffffff:
            raise OverflowError('Plaintext is too long.')
        
        plain_bytes = \
            len(plain_bytes).to_bytes(4, 'little') + \
            plain_bytes + \
            SHA256.new(plain_bytes).digest()
        padded_plain_bytes = \
            plain_bytes + \
            os.urandom(AES.block_size - len(plain_bytes) % AES.block_size)
        cipher = AES.new(self.Key, AES.MODE_CBC, iv = self.IV)
        return cipher.encrypt(padded_plain_bytes).hex()

    def Decrypt(self, Ciphertext : str):
        '''
        Decrypt ciphertext and return corresponding plaintext.
        Args:
            Ciphertext: A hex string that will be decrypted.
        Returns:
            Plaintext string.
        '''
        cipher = AES.new(self.Key, AES.MODE_CBC, iv = self.IV)
        padded_plain_bytes = cipher.decrypt(bytes.fromhex(Ciphertext))
        
        plain_bytes_length = int.from_bytes(padded_plain_bytes[0:4], 'little')
        plain_bytes = padded_plain_bytes[4:4 + plain_bytes_length]
        if len(plain_bytes) != plain_bytes_length:
            raise ValueError('Invalid Ciphertext.')

        plain_bytes_digest = padded_plain_bytes[4 + plain_bytes_length:4 + plain_bytes_length + SHA256.digest_size]
        if len(plain_bytes_digest) != SHA256.digest_size:
            raise ValueError('Invalid Ciphertext.')

        if SHA256.new(plain_bytes).digest() != plain_bytes_digest:
            raise ValueError('Invalid Ciphertext.')

        return plain_bytes.decode('utf-8')

if __name__ == '__main__':
    import sys

    def Help():
        print('Usage:')
        print('    SecureCRTCipher.py <enc|dec> [-v2] [-p ConfigPassphrase] <plaintext|ciphertext>')
        print('')
        print('    <enc|dec>              "enc" for encryption, "dec" for decryption.')
        print('                           This parameter must be specified.')
        print('')
        print('    [-v2]                  Encrypt/Decrypt with "Password V2" algorithm.')
        print('                           This parameter is optional.')
        print('')
        print('    [-p ConfigPassphrase]  The config passphrase that SecureCRT uses.')
        print('                           This parameter is optional.')
        print('')
        print('    <plaintext|ciphertext> Plaintext string or ciphertext string.')
        print('                           NOTICE: Ciphertext string must be a hex string.')
        print('                           This parameter must be specified.')
        print('')
    
    def EncryptionRoutine(UseV2 : bool, ConfigPassphrase : str, Plaintext : str):
        try:
            if UseV2:
                print(SecureCRTCryptoV2(ConfigPassphrase).Encrypt(Plaintext))
            else:
                print(SecureCRTCrypto().Encrypt(Plaintext))
            return True
        except:
            print('Error: Failed to encrypt.')
            return False

    def DecryptionRoutine(UseV2 : bool, ConfigPassphrase : str, Ciphertext : str):
        try:
            if UseV2:
                print(SecureCRTCryptoV2(ConfigPassphrase).Decrypt(Ciphertext))
            else:
                print(SecureCRTCrypto().Decrypt(Ciphertext))
            return True
        except:
            print('Error: Failed to decrypt.')
            return False

    def Main(argc : int, argv : list):
        if 3 <= argc and argc <= 6:
            bUseV2 = False
            ConfigPassphrase = ''

            if argv[1].lower() == 'enc':
                bEncrypt = True
            elif argv[1].lower() == 'dec':
                bEncrypt = False
            else:
                Help()
                return -1
            
            i = 2
            while i < argc - 1:
                if argv[i].lower() == '-v2':
                    bUseV2 = True
                    i += 1
                elif argv[i].lower() == '-p' and i + 1 < argc - 1:
                    ConfigPassphrase = argv[i + 1]
                    i += 2
                else:
                    Help()
                    return -1

            if bUseV2 == False and len(ConfigPassphrase) != 0:
                print('Error: ConfigPassphrase is not supported if "-v2" is not specified')
                return -1

            if bEncrypt:
                return 0 if EncryptionRoutine(bUseV2, ConfigPassphrase, argv[-1]) else -1
            else:
                return 0 if DecryptionRoutine(bUseV2, ConfigPassphrase, argv[-1]) else -1
        else:
            Help()

    exit(Main(len(sys.argv), sys.argv))
```



## 三、解密

### 帮助信息

```
# python SecureCRTCipher.py
Usage:
    SecureCRTCipher.py <enc|dec> [-v2] [-p ConfigPassphrase] <plaintext|ciphertext>

    <enc|dec>              "enc" for encryption, "dec" for decryption.
                           This parameter must be specified.

    [-v2]                  Encrypt/Decrypt with "Password V2" algorithm.
                           This parameter is optional.

    [-p ConfigPassphrase]  The config passphrase that SecureCRT uses.
                           This parameter is optional.

    <plaintext|ciphertext> Plaintext string or ciphertext string.
                           NOTICE: Ciphertext string must be a hex string.
                           This parameter must be specified.

```



### 1.如果ini配置文件是v2

执行命令行中执行python decrypt.py dec [-v2] 编码字符串

执行

```
python SecureCRTCipher.py dec -v2 加密串
```



### 2.如果ini配置文件是

```
python SecureCRTCipher.py dec  加密串
```

例如：

![image-20221102133949379](https://imgoss.xgss.net/picgo/image-20221102133949379.png?aliyun)

解密成功。



