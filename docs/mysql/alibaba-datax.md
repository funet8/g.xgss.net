# 阿里巴巴高效的离线数据同步工具DataX



## 前言

我们公司有个项目的数据量高达五千万，但是因为报表那块数据不太准确，业务库和报表库又是跨库操作，所以并不能使用 SQL 来进行同步。当时的打算是通过 mysqldump 或者存储的方式来进行同步，但是尝试后发现这些方案都不切实际：

## mysqldump方案

不仅备份需要时间，同步也需要时间，而且在备份的过程，可能还会有数据产出（也就是说同步等于没同步）存储方式：这个效率太慢了，要是数据量少还好，我们使用这个方式的时候，三个小时才同步两千条数据…



## 开源地址

https://github.com/alibaba/DataX

## DataX是什么

DataX是阿里云[DataWorks](https://www.aliyun.com/product/bigdata/ide)数据集成的开源版本。

DataX 是阿里云 DataWorks 数据集成 的开源版本，主要就是用于实现数据间的离线同步。 DataX 致力于实现包括关系型数据库（MySQL、Oracle 等）、HDFS、Hive、ODPS、HBase、FTP 等 各种异构数据源（即不同的数据库） 间稳定高效的数据同步功能。

![img](https://imgoss.xgss.net/picgo/NzKXqim9IBGsOPv_1656059857.png?aliyun)

为了 解决异构数据源同步问题，DataX 将复杂的网状同步链路变成了星型数据链路 ，DataX 作为中间传输载体负责连接各种数据源；
当需要接入一个新的数据源时，只需要将此数据源对接到 DataX，便能跟已有的数据源作为无缝数据同步。











