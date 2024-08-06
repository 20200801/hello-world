# 我们是
​		智能控制平台是基于先进技术的集成系统，旨在提升办公环境的效率、舒适性和可持续性。这种系统通常整合了物联网（IoT）、传感器技术、自动化控制和大数据分析等多种技术，以实现对办公空间、设备和资源的智能化管理和优化。


## 业务特点
### 最大化的自定义
​		通过灵活应用设备接入、规则定义和空间管理等技术手段，我们可以最大程度地满足各种业务需求，实现自定义和自由灵活的系统适配。这不仅提高了工作效率，还为企业带来了更多的便利和智能化的操作方式。

### 在设备接入方面
​		我们可以采用多种协议来实现设备的连接。无论是通过物理连接还是无线连接，我们都能够灵活地适配各种设备，并确保其正常运行。可以使用最常见的HTTP、TCP、UDP协议，也可以使用MQTT、Modbus、OPC UA等协议，来连接各种智能设备。

### 在规则定义方面
​		我们可以根据具体的业务需求，制定个性化的规则。这些规则可以包括条件语句、触发器和动作，以确保设备在特定条件下执行预期的操作。通过规则定义，我们可以实现设备之间的协同工作，从而提高效率和自动化程度。例如，可以设置温度传感器的规则，当温度超过设定阈值时，自动调节空调的温度和风速，以实现室内温度的控制。

### 在空间管理方面
​		我们可以通过将设备划分为不同的空间或区域，来更好地管理和组织这些设备。通过空间管理，我们能够实现对设备的集中监控和智能控制，从而提高整体的运行效率。例如，可以将办公室内的设备划分为会议室、办公区和休息区等不同的空间，通过集中管理，实现设备的统一调度和维护。
## 硬件特点

### 海量的硬件适配
​		支持多种协议的设备接入、设备灵活多样的部署方式、备份容灾、整套系统可不受网络限制的独立运行以及通过中控面板自由操控设备，都是现代化设备管理系统的重要特点。这些特点不仅提高了系统的通用性和灵活性，同时也增强了系统的稳定性和用户体验。无论是家庭、办公室还是工业环境，这些特点都能够为用户带来更加便捷、智能和高效的设备管理解决方案。
### 多种多样的接入协议
​		根据你所掌握的关于支持多种协议的设备接入，我们可以看到现代化的设备管理系统越来越注重兼容不同的通信协议。这使得各种设备能够灵活地与管理系统进行连接和通信，无论是通过HTTP还是通过TCP、UDP。支持多种协议的设备接入确保了系统的通用性和扩展性，使得用户可以选择最适合自己需求的设备，并将其无缝集成到整个系统中。
### 独特的部署方式
​		除了支持多种协议的设备接入外，设备的部署方式也变得灵活多样。不仅支持云服务器部署，还支持网关部署和独立运行，即使在无网络环境下也能正常工作。最大限度保证系统的安全性，同时还可以保证设备的高可用性，以实现设备的连续运行和正常工作。
### 多网关备份容灾
​		同时在整个系统运行过程中，备份容灾是至关重要的。无论是硬件故障、网络故障还是其他突发情况，备份容灾策略可以确保系统的可用性和稳定性。通过多网关备份关键设备和数据，以及建立冗余的网络连接，系统可以在发生故障时自动切换到备份设备或备份网络，从而最大程度地减少服务中断的风险。同时，备份容灾还可以提供数据恢复和紧急应对措施，以应对各种意外情况。
### 中控面板使用
​		为了方便用户操作和控制设备，中控面板是不可或缺的。通过中控面板，用户可以集中管理和监控所有设备，并进行相应的配置和控制。用户可以根据自己的需求，自由地操控设备，实时获取设备状态和数据，并进行相关的调整和优化。中控面板为用户提供了一个直观和友好的界面，使设备管理变得更加便捷和高效。
## 架构特点
​		在我们的架构中，物模型是核心概念之一。它描述了设备的属性、状态和行为等信息，以及设备之间的关系。通过物模型，我们可以实现设备的接入和管理。例如，可以定义一个传感器的物模型，包括温度、湿度等属性，并指定其控制命令和事件。这样，我们就可以通过调用相应的服务接口，获取传感器的数据或控制其工作状态。
为了实现设备的接入和通信，我们可以使用不同的编程语言。

### 全新的技术架构
- Java作为一种通用的编程语言，具有丰富的库和框架支持，可以很好地处理网络通信和多线程问题。
- C语言则是一种底层的编程语言，适合对硬件进行直接操作。
- NodeJs则提供了一个基于浏览器的编辑器，支持在线定义物模型、通信协议等功能。
### 多租户和企业级权限控制
- 在我们的架构中，多租户管理是一个重要的功能。它允许将多个客户或组织隔离开来，每个租户都拥有自己的资源和权限。这样可以确保数据的安全性和隔离性。通过使用企业级的权限控制，我们可以灵活地定义不同角色和权限，并将其分配给不同的用户或用户组。