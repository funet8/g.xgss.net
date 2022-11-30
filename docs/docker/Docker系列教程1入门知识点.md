# Docker系列教程1:入门知识点

# 什么是Docker

在全球范围内，Docker已经发展成为云计算的核心技术之一。

思考一下什么是Docker？

![img](https://imgoss.xgss.net/picgo/bg2018020901.png?aliyun)

# 虚拟化技术

虚拟化技术已经走过了三个时代，没有容器化技术的演进就不会有 Docker 技术的诞生。

物理机时代--->虚拟机时代--->容器化时代

![img](https://imgoss.xgss.net/picgo/9874f0cb3353895a0d70b0ab56cd97e6.png?aliyun)

## 物理机时代

物理机时代：多个应用程序可能会跑在一台机器上。

![img](https://imgoss.xgss.net/picgo/f3db1655de0826005d34607eb4d23c71.png?aliyun)

## 虚拟机时代

一台物理机器安装多个虚拟机（VM），一个虚拟机跑多个程序。

```
1、vmware workstation； （笔者用的最多）
2、VMware Player；
3、VirtualBox，一款免费开源的虚拟机软件；
4、Microsoft Virtual PC；
5、Java 虚拟机（JVM）；
6、Hyper-V
7、KVM （笔者服务器用的最多）
8、XEM
等等
```



![img](https://imgoss.xgss.net/picgo/21e0e169b09d6c0c193355ee0fa7e511.png?aliyun)

## 容器化时代

容器化时代：一台物理机安装多个容器实例（container），一个容器跑多个程序。

![img](https://imgoss.xgss.net/picgo/02f0cffbc34be419160f40552d20e0dc.png?aliyun)

容器化解决了软件开发过程中一个令人非常头疼的问题，用一段对话描述：

```
测试人员：你这个功能有问题。

开发人员：我本地是好的啊。

运维人员： 一次安装，随意迁移。
```

开发人员编写代码，在自己本地环境测试完成后，将代码部署到测试或生产环境中，经常会遇到各种各样的问题。明明本地完美运行的代码为什么部署后出现很多 bug，原因有很多：不同的操作系统、不同的依赖库等，总结一句话就是因为本地环境和远程环境不一致。

容器化技术正好解决了这一关键问题，它将软件程序和运行的基础环境分开。开发人员编码完成后将程序打包到一个容器镜像中，镜像中详细列出了所依赖的环境，在不同的容器中运行标准化的镜像，从根本上解决了环境不一致的问题。

# 什么是Docker

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows操作系统的机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（百度百科）。

对应用的封装、分发、部署、运行生命周期进行管理，达到应用组件“一次封装，到处运行”的目的。这里应用组件既可以是一个web应用，一个编译环境，也可以是一套数据库平台服务，甚至是一个操作系统或者集群。

Docker基于go语言实现的开源容器项目，诞生与2013年。

# Docker优点

## Docker虚拟化的好处

区别与传统服务器部署，docker通过容器来打包应用，解耦应用和运行平台。意味着迁移的时候，只需要在新的服务器上启动需要的容器就行了，无论新旧服务器是否是同一平台。无疑将节省大量时间。

## 1、部署方便

你一定还有印象，在我们最开始学习编程的时候，搭建环境这一步往往会耗费我们好几个小时的时间，而且其中一个小问题可能需要找很久才能够解决。你还会得到关于环境搭建方面的团队其他成员的求助。而有了容器之后，这些都变得非常容易，你的开发环境就只是一个或者几个[容器镜像](https://cloud.tencent.com/product/tcr?from=10680)的地址，最多再需要一个控制部署流程的执行脚本。或者进一步将你的环境镜像以及镜像脚本放入一个git项目，发布到云端，需要的时候将它拉到本地就可以了。



## 2、部署安全

当我们收到一个bug反馈的时候，很多时候心里面的第一反应一定是“我本地是好的啊”！ 这种情况的发生就在于环境的不一致，我们在开发过程中的调试往往不能保证其他环境的问题，但是我们却要为此买单，这真是一件令人苦恼的事情。有了容器之后，这将很少发生。我们可以通过容器技术将开发环境和测试环境以及生产环境保持版本和依赖上的统一，保证代码在一个高度统一的环境上执行。而测试环境的统一，也同样能解决CI流程对环境的要求。

分布式技术和扩容需求日益增长的今天，如果运维能够使用容器技术来进行环境的部署，不仅仅在部署时间上节省不少，也能把很多因为人工配置环境产生的失误降到最低。 

## 3、 隔离性好

不管是开发还是生产，往往我们一台机器上可能需要跑多个服务，而服务各自需要的依赖配置不尽相同，假如说两个应用需要使用同一个依赖，或者两个应用需要的依赖之间会有一些冲突，这个时候就很容易出现问题了。 所以同一台服务器上不同应用提供的不同服务，最好还是将其隔离起来。而容器在这方面有天生的优势，每一个容器就是一个隔离的环境，你对容器内部提供服务的要求，容器可以自依赖的全部提供。这种高内聚的表现可以实现快速的分离有问题的服务，在一些复杂系统中能实现快速排错和及时处理。(当然需要说明的是，这个隔离性只是相对于服务器比较的，虚机技术要拥有更好的隔离性)

## 4、快速回滚

容器之前的回滚机制，一般需要基于上个版本的应用重新部署，且替换掉目前的问题版本。在最初的时代，可能是一套完整的开发到部署的流程，而执行这一套流程往往需要很长的时间。在基于git的环境中，可能是回退某个历史提交，然后重新部署。这些跟容器技术相比都不够快，而且可能会引起新的问题（因为是基于新版本的修改）。而容器技术天生带有回滚属性，因为每个历史容器或者镜像都会有保存，而替换一个容器或者某个历史镜像是非常快速和简单的。

## 5、 成本低

这可能是一个最明显和有用的优点了，在容器出现之前，我们往往构筑一个应用就需要一台新的服务器或者一台虚机。服务器的购置成本和运维成本都很高，而虚机需要占用很多不必要的资源。相比之下，容器技术就小巧轻便的多，只需要给一个容器内部构建应用需要的依赖就可以了，这也是容器技术发展迅速的最主要原因。

## 6、 管理成本更低

随着容器技术的不断普及和发展，随之而来的容器管理和编排技术也同样得到发展。诸如Docker Swarm，Kubernetes, Mesos等编排工具也在不断的迭代更新，这让容器技术在生产环境中拥有了更多的可能性和更大的发挥空间。而随着大环境的发展，docker等容器的使用和学习的成本也是愈发降低，成为更多开发者和企业的选择。

说了这么多的优点，容器也有一些问题是没有解决的。上一代方案基本就是基于虚机技术的云方案，能有效增加服务器的使用效率，达到节省成本的目的，而容器技术在此基础上更进一步地优化了资源的使用率。但是仍然有一些问题，是我们在选择服务资源架构场景中需要考虑的。



# Docker的缺点

## 1、隔离性

基于hypervisor的虚机技术，在隔离性上比容器技术要更好，它们的系统硬件资源完全是虚拟化的，当一台虚机出现系统级别的问题，往往不会蔓延到同一宿主机上的其他虚机。但是容器就不一样了，容器之间共享同一个操作系统内核以及其他组件，所以在收到攻击之类的情况发生时，更容易通过底层操作系统影响到其他容器。当然，这个问题可以通过在虚机中部署容器来解决，可是这样又会引出新的问题，比如成本的增加以及下面要提到的问题：性能。

## 2、性能

不管是虚机还是容器，都是运用不同的技术，对应用本身进行了一定程度的封装和隔离，在降低应用和应用之间以及应用和环境之间的耦合性上做了很多努力，但是随机而来的，就会产生更多的网络连接转发以及数据交互，这在低并发系统上表现不会太明显，而且往往不会成为一个应用的瓶颈（可能会分散于不同的虚机或者服务器上），但是当同一虚机或者服务器下面的容器需要更高并发量支撑的时候，也就是并发问题成为应用瓶颈的时候，容器会将这个问题放大，所以，并不是所有的应用场景都是适用于容器技术的。 

## 3、存储方案

容器的诞生并不是为OS抽象服务的，这是它和虚机最大的区别，这样的基因意味着容器天生是为应用环境做更多的努力，容器的伸缩也是基于容器的这一disposable特性，而与之相对的，需要持久化存储方案恰恰相反。这一点docker容器提供的解决方案是利用volume接口形成数据的映射和转移，以实现数据持久化的目的。但是这样同样也会造成一部分资源的浪费和更多交互的发生，不管是映射到宿主机上还是到网络磁盘，都是退而求其次的解决方案。

随着硬件技术和网络技术的迭代发展，容器技术的缺点会变得越来越不那么明显，而且随着容器技术的发展和普及，对应的解决方案也会越来越多。所以总体来看，docker等容器技术会朝着更加普及的趋势走近我们技术领域。 也希望每一位热爱技术的小伙伴们能更加了解这些新技术，让它们能够更好的为我们服务。

# Docker与虚拟机比较

虚拟机也是一种虚拟化技术，它与 Docker 最大的区别在于它是通过模拟硬件，并在硬件上安装操作系统来实现。

![img](https://imgoss.xgss.net/picgo/nrhjtypbdh.jpeg?aliyun)

## 1.启动速度

启动虚拟机需要先启动虚拟机的操作系统，再启动应用，这个过程非常慢；

而启动 Docker 相当于启动宿主操作系统上的一个进程。

## 2.占用资源

虚拟机是一个完整的操作系统，需要占用大量的磁盘、内存和 CPU 资源，一台机器只能开启几十个的虚拟机。

而 Docker 只是一个进程，只需要将应用以及相关的组件打包，在运行时占用很少的资源，一台机器可以开启成千上万个 Docker。



Dokcer可以通过类似git设计理念来操作，方便用户获取、分发、更新、应用镜像，存储复用、增量更新。

Docker通过dockerfile支持灵活自动化创建和部署机制，提高工作效率，是流程标准化。



# Docker 的应用场景

[Docker 的应用场景在哪里？知乎](https://www.zhihu.com/question/22969309)： https://www.zhihu.com/question/22969309

@Li Yingjie的回答。

1. **简化配置**

2. 代码流水线（Code Pipeline）管理

3. 提高开发效率

4. **隔离应用**

5. 整合服务器

6. 调试能力Docker

7. 多租户环境

8. **快速部署**

   

   ## docker的目标

   docker的主要目标是"Build,Ship and Run any App,Angwhere",构建，运输，处处运行

   构建：做一个docker镜像

   运输：docker pull

   运行：启动一个容器

   每一个容器，他都有自己的文件系统rootfs.

# Docker的安装

Docker 是一个开源的商业产品，有两个版本：社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）。企业版包含了一些收费服务，个人开发者一般用不到。下面的介绍都针对社区版。

Docker CE 的安装请参考官方文档。

> - [Mac](https://docs.docker.com/docker-for-mac/install/)
> - [Windows](https://docs.docker.com/docker-for-windows/install/)
> - [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
> - [Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
> - [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
> - [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)
> - [其他 Linux 发行版](https://docs.docker.com/install/linux/docker-ce/binaries/)

安装完成后，运行下面的命令，验证是否安装成功。

```
$ docker version
# 或者
$ docker info
```

Docker 是服务器----客户端架构。命令行运行`docker`命令的时候，需要本机有 Docker 服务。如果这项服务没有启动，可以用下面的命令启动（[官方文档](https://docs.docker.com/config/daemon/systemd/)）。

```
# service 命令的用法
$ sudo service docker start

# systemctl 命令的用法
$ sudo systemctl start docker
```



# 镜像、容器、仓库是什么？

**仓库存放镜像，拉取镜像运行生成容器。**

## Docker镜像

image文件:Docker 把应用程序及其依赖，打包在 image 文件里面。只有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。

类似于虚拟机的系统镜像、只读模板。例如一个镜像可以包含一个基本的操作系统、里面仅安装了nginx（或其他软件），可以把其成为nginx镜像

```
# 列出本机的所有 image 文件。
docker image

# 删除 image 文件
docker image rm [imageName]
```



## Docker容器

类似于一个轻量级的沙箱，docker利用容器来运行和隔离应用。
容器是从镜像创造的应用实例。可以将其启动、开始、停止、删除，而这些容器都是彼此隔离的。



简单的例子：

```
#拉取镜像
docker pull portainer/portainer-ce:latest

#启动2个容器
docker run -d  --name portainer1 \
--restart always -p 9001:9000  \
-v /var/run/docker.sock:/var/run/docker.sock  \
-v /data/docker/portainer1:/data   \
--privileged=true  \
portainer/portainer-ce:latest

docker run -d  --name portainer2 \
--restart always -p 9002:9000  \
-v /var/run/docker.sock:/var/run/docker.sock  \
-v /data/docker/portainer2:/data   \
--privileged=true  \
portainer/portainer-ce:latest

# 停止容器
docker stop portainer1
docker stop portainer2

# 启动容器
docker start portainer1
docker start portainer2

# 删除容器
docker rm -f portainer1 ('-f'强制删除正在运行的容器)
docker rm -f portainer2
```

容器 portainer1 和 portainer2 是互相独立的彼此隔离的。

## Docker仓库

类似于代码仓库。docker集中存放镜像的文件场所

Docker 的[官方仓库](https://hub.docker.com/) Docker Hub 是最重要、最常用的 image 仓库。

阿里Docker仓库： https://cr.console.aliyun.com/。由于docker官方仓库下载速度慢，一般的步骤是把官方仓库重新打包，打一个tag再push到阿里云DOCKER仓库，（教程后续再写文章）这样下载速度会很快，有点像github.com和gitee.com的操作。

Docker仓库存放某个已经配置好的镜像，再用安装Docker的机器(客户端)，拉取该push镜像

# 应运而生的Kubernetes(K8S)

尽管Docker为容器化的应用程序提供了开放标准，但随着容器越来越多出现了一系列新问题：

- 如何协调和调度这些容器？
- 如何在升级应用程序时不会中断服务？
- 如何监视应用程序的运行状况？
- 如何批量重新启动容器里的程序？

解决这些问题需要容器编排技术，可以将众多机器抽象，对外呈现出一台超大机器。现在业界比较流行的有：**k8s、Mesos、Docker Swarm**。

## Kubernetes

Kubernetes 这个名字源于希腊语，意为“舵手”或“飞行员”。k8s 这个缩写是因为 k 和 s 之间有八个字符的关系。 Google 在 2014 年开源了 Kubernetes 项目。

K8S(Kubernetes) 是一个可移植的、可扩展的开源平台，**用于管理容器化的工作负载和服务，可促进声明式配置和自动化。** Kubernetes 拥有一个庞大且快速增长的生态系统。Kubernetes 的服务、支持和工具广泛可用。

在业务发展初期只有几个微服务，这时用 Docker 就足够了，但随着业务规模逐渐扩大，容器越来越多，运维人员的工作越来越复杂，这个时候就需要编排系统解救opers。

## Kubernetes VS Docker Swarm

如果你非要拿 Docker 和 k8s 进行比较，其实你更应该拿 Docker Swarm 和 k8s 比较。

Docker Swarm 是 Docker 自家针对集群化部署管理的解决方案，优点很明显，可以更紧密集成到 Docker 生态系统中。

虽说 Swarm 是 Docker 亲儿子，但依旧没有 k8s 流行，不流行很大程度是因为商业、生态的原因，不多解释。

Docker很香，但 k8s 在业务达到一定规模后也得启用。

# Docker在美国“实体清单”

**Docker公司最新服务条款引起了国内IT业界的广泛关注。该条款明确指出，Docker公司提供的服务，禁止美国“实体清单”上的实体使用。**

![img](https://imgoss.xgss.net/picgo/8ea9a310c61021c2f5fa403df8d69f43.webp?aliyun)

目前中国 IT 公司被列入贸易管制“实体清单”的企业包括：华为、商汤、依图、旷视、海康威视、大华、科大讯飞、美亚柏科、颐信科技、奇虎360、烽火科技集团、东方网力、达闼科技、云从科技、中科曙光、海光等。

而且，未来不排除更多的中国IT公司会被“请进”这个“实体清单”。来源： https://jishuin.proginn.com/p/763bfbd638b9





参考：

https://blog.csdn.net/x275920/article/details/123990830

https://mp.weixin.qq.com/s/xbqLhBIBbIkJKGwSDs_G2w

