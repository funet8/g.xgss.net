# 资深运维工程师必须了解的操作系统基础

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/d13583e9888240d5930bcaae98c1b47d?aliyunoss)



# 操作系统的介绍

# 操作系统诞生的背景

在操作系统出现之前软件都是直接运行在硬件之上的,因为硬件就是为了实现某个特定功能(例如弹道导弹计算)，但是随着计算机性能的不断提高，可以同时在一个硬件上同时运行多个软件，这些软件都需要访问硬件资源(CPU、内存、磁盘、网卡)，此时需要一个协调者，因此操作系统就诞生了。

# 操作系统演变

操作系统从最早期的单用户操作系统发展成现在的个人计算机，甚至是分布式计算的演变过程。

- 单用户操作系统:一次只能支持一个用户程序的运行，向用户提供联机交互式的工作环境，例如DOS。
- 批处理系统:用户将一批作业交给操作系统后就不再交互，由操作系统自动运行，提高系统运行效率。
- 多道程序系统:一台电脑上运行多个程序，程序控制CPU处理顺序。
- 分时系统:提高系统利用率，操作系统控制CPU的处理顺序
- 个人计算机:每个用户对应一个系统，廉价，方便，易用
- 分布式计算:每个用户对应多个系统，云计算，大数据处理

# 操作系统的功能和分类

操作系统(Operating System)是一个通用目的的软件程序，提供了硬件驱动(CPU、内存、声卡、显卡、网卡)、进程管理、内存管理、网络管理、安全管理、文件管理等通用功能提供给系统软件和应用软件使用。
操作系统介于应用软件和计算机硬件之间，给应用软件提供开发和运行平台，同时管理和调度硬件资源。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/ac0f92513e134890825c98adf7bbc1f2?aliyunoss)




平常使用的应用软件(微信、支付宝、wps)都是运行在操作系统之上，利用操作系统提供的通用功能实现听音乐、上网、聊天等等应用。因为有了操作系统，应用软件开发人员只需要专注功能实现，不需要关注硬件差异性。

目前主流的操作系统包含 服务器端的RHEL、CentOS(RHEL社区版)、Ubuntu Server 和桌面端 Windows10、 macOS、Ubuntu桌面版以及移动端Android 、IOS、华为鸿蒙OS。

Linux运维架构主要是围绕CentOS与Ubuntu Server两个系统以及相关的生态展开。



![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/8a38b673a52e4b109402b835bb0c074f?aliyunoss)





# 操作系统的核心概念

> 操作系统的核心概念对初学者来说可能难以理解，但是如果你学完Linux系统之后会有更加深入的理解

# 接口

操作系统通过接口的方式，建立了用户与计算机硬件的沟通方式。用户通过调用操作系统的接口来使用计算机的各种服务。

> 接口(interface):来源于电气工程学科，指的是插座与插头的连接口，起到将电与电气连接起来的功能。后来延伸到软件工程里，指软件包向外提供的功能模块的函数接口，所以接口是用来连接两个东西，信号转换和屏蔽细节。

操作系统一般会提供两个重要的接口来满足用户的一些一般性的使用需求:

- 命令行接口(Command Line Interface)
  在Linux系统上实际上是一个叫bash shell的终端程序提供的功能，该程序底层的实质还是调用一些操作系统提供的函数。



![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/4148e9c118ee479a8f5b93c150e427a2?aliyunoss)



- 图形界面接口（Graphic User Interface）
  窗口界面通过编写的窗口程序来接收来自操作系统消息队列的一些鼠标、键盘动作，进而做出一些响应。Windows,macOS,Ubuntu Desktop都是使用窗口界面完成绝大多数日常任务，适用于广大普通用户。因此在桌面端的Windows操作系统占据广大市场份额。



![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/abf34536f7ea45f5ab2c01c5aca2b6db?aliyunoss)



# ABI

ABI(Application Binary Interface) 即应用程序二进制接口，描述了应用程序与操作系统之间的底层接口，允许编译好的目标代码在使用兼容ABI的系统中无需改动就能运行。
Windows中程序的运行格式通常是PE(Protable Executable)格式，还有一些依赖的动态链接库(文件名后缀通常是.dll 即dynamic link library)以及库文件(后缀名是.lib)

我们可以将Windows上的记事本程序(C:\Windows\notepad.exe)使用Moba xTerm上传到Linux上，然后使用file notepad.exe命令查看该程序的格式信息

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/c43b9b602d9f4cbe98942399d717a9bb?aliyunoss)



```
[root@centos8-1 ~]# file notepad.exe 
notepad.exe: PE32 executable (GUI) Intel 80386, for MS Windows
```

Linux中程序的运行格式通常是ELF(Executable and Linking Format),还有一些依赖的库文件(后缀名通常是.so即shared object),Linux中可执行程序和后缀名无关，甚至可以没有后缀。

```
[root@centos8-1 ~]# file /bin/ls
/bin/ls: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=f4154ce8a36c20d9aa270cc21c6b25ec026ac00f, stripped
```

因为每个操作系统的ABI不同，也就意味着Windows上运行的程序(例如notepad.exe)不能在Linux上运行，而开发人员在开发应用软件时通常要针对不同的操作系统开发不同的版本。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/a54b2666ccb24046baffc4ffd83e87c9?aliyunoss)



```
[root@centos8-1 ~]# ./notepad.exe # 运行notepad.exe 发现提示没有执行权限
-bash: ./notepad.exe: Permission denied
[root@centos8-1 ~]# chmod +x notepad.exe # 给记事本添加执行权限
[root@centos8-1 ~]# ./notepad.exe # 再次运行发现提示执行程序的格式错误
-bash: ./notepad.exe: cannot execute binary file: Exec format error
```

# API

API(Application Programming Interface) 即应用程序编程接口，API定义了源代码和库函数之间的接口，开发人员在开发程序时可以调用系统提供的API来完成某些功能，因此同样的源代码可以支持在这个API的任何系统编译。

为了统一规范，IEEE在操作系统上定义了一系列的API标准:POSIX（Portable Operating System Interface）即可移植的操作系统接口，实现了POSIX标准兼容的程序可以在其他POSIX操作系统编译执行。

现在的高级编程语言(Java,Go,Python)已经实现了完全的跨平台，屏蔽了操作系统的差异,实现一次编写，到处编译\解释运行。

如果想要在Linux下开发应用程序，就需要掌握某种高级编程语言，例如C/C++/Java/Python/Go/Ruby等等。高级语言都需要经过编译器/解释器来将高级语言编写的源程序编译/解释成计算机能识别的机器语言后执行。

其中Linux内核和硬件驱动使用C语言和少数汇编语言开发的，汇编语言将机器指令使用英文代替，无法移植。而Linux系统的应用是使用C/C++/Java/Python/Go/Ruby语言开发的，例如RocketMQ是Java开发的，Docker是Go语言开发的，JumpServer、Ansible是Python开发的。

想要高薪就业、在IT行业长久发展，必须掌握系统运维架构与应用开发。运维开发语言首推Python,Go，而大型分布式互联网应用(电商、金融、支付、物流)首选语言是Java。

目前比较火的SRE工程师岗位实际上就是运维+架构+开发的组合，而且薪水也比较高,如果大家的学习能力OK，建议往SRE方向发展。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/8a37b31661734c19b89fc3adb1861e20?aliyunoss)



# 库函数和系统调用

对于非一般性使用需求，操作系统提供了一系列的函数调用给软件开发者，由软件开发者来实现一些用户需要的功能。这些函数调用由于是操作系统内核提供的，为了区别于一般的函数调用，被称为系统调用。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/26418b883a7b456ea9d126cf1baa323e?aliyunoss)



比如使用C语言进行软件开发时，经常使用的printf()函数，它的内部实际上就是通过write这个系统调用，让操作系统内核把字符打印在屏幕上。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/e2bf3b510def443bbfa74f67dd57d58c?aliyunoss)



库函数和系统调用

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/7d35d6c3b17843d5817f2156bf55c458?aliyunoss)



# 用户态和内核态

计算机硬件资源都是操作系统内核进行管理，目前的操作系统都是基于多任务，多用户的。如果每个用户进程都可以随意访问操作系统的内核模块，改变状态，那么整个系统的稳定性、安全性都大大降低。

为了让内核程序与用户程序隔离开，在硬件层面上提供了一个机制，将程序执行的状态分成了不同的级别，从Ring 0到Ring 3，数字越小，访问级别越高。0代表内核态，在该特权级别下，所有内存上的数据都是可见的，可访问的。3代表用户态，在这个特权级下，程序只能访问一部分的内存区域，只能执行一些特定的指令。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/3ad8146156684032a08082fa515dd82d?aliyunoss)

用户态和内核态

如果应用程序想要访问硬件资源,此时需要发送请求给内核，由内核和硬件的交互。



![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/c75e2b973e99403fa68c8e05e936d55f?aliyunoss)

用户态和内核态



# 用户空间和内核空间

- 用户空间(User Space) 表示用户程序的运行空间，为了安全，用户空间和内核空间是隔离的，即使用户的程序崩溃，也不会影响内核。用户空间只能执行简单的运算，不能直接调用系统资源，必须通过系统接口(system call) 才能向内核发出指令。
- 内核空间（Kernel Space) 表示内核的运行空间，可以执行任意指令，调用系统的一切资源。

![资深运维工程师必须了解的操作系统基础](http://imgoss.xgss.net/picgo/b22168f9acfe49e6be926536f6e7789a?aliyunoss)

用户空间和内核空间

下面以一段C语言代码片段来说明用户空间和内核空间

```
str ="www.ittimeline.net";   //用户空间
x=100;    //用户空间
x=x+100; //用户空间
file.write(str);   //切换到内核空间
y=x+200    //切换到内核空间
```

第1,2,3行都是简单的赋值操作，直接在用户空间执行，第四行需要写入文件，就需要切换到内核空间，因为用户不能直接写文件，需要通过内核来执行。第五行又是赋值运算，需要从内核空间切换回用户空间。内核空间和用户空间的切换需要消耗资源。