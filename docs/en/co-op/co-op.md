# Chart Sharing
谱面共享是Visual Maimai在1.3.0推出的一个新功能，可以通过Intranet进行多人协作编辑同一个谱面,虽然是Intranet，但可以通过一些手段让远在其他地区的作者与发起者协作创作。   
Chart Sharing is a new feature for Visual Maimai 1.3.0,it can co-op by **Intranet**,but there's also have some way to co-op with other region's friends.
## Ready (Server and Client)
你需要在“选项”下的“偏好设置”，在“共享”选项里面设置你的名字。  
可选设置端口号、密码。  
You need to set your username at Options-Prefernce Settings-Sharing.
## Create a room
打开Visual Maimai,点击“文件”下的“开启谱面共享”，设置一个端口（0~65535均可，80和443除外），设置人数上限。  
Open Visual Maimai,tap File-Enable Chart Sharing,set a port (from 0 to 65535,80 and 443 are not allowed),set maximum members.
最后点击确定，开启房间。  
Then tap Confirm,then the room is created now.
随后需要同时按下键盘上的“Win”和“R”，输入“cmd”。在出现的黑色框里面输入“ipconfig”，找到“192.168”开头的IPv4地址，复制下来，连同端口号发给好友。  
Then you need to press your keyboard's "Win" and "R" at same time,input "cmd",then input "ipconfig" at the black window,find a IPv4 address is starts with "192.168",then copy it,send to your friend with the port number. 
若需要关闭谱面共享，请点击“文件”下的“结束谱面共享”关闭共享功能。  
If you want to stop it,tap File-Close Chart Sharing
## Join the Room
打开Visual Maimai，点击“文件”下的“加入谱面共享”，输入“IP地址:（英文半角冒号）端口号”（举例：如果房主发的IP是192.168.32.4，端口号是25565，那么你应该这么填：```192.168.32.4:25565```）。  
Open Visual Maimai,tap File-Join Chart Sharing,input ```IPADDRESS:PORTNUMBER```.
## Some Small Features When Started/Joined Chart Sharing
在加入谱面共享之后，你会看到预览窗口右上角出现了三个按钮，功能分别是：成员列表、聊天、？？？  
After join chart sharing,you will see there's three new buttons at top right corner of the preview window,they're:Member List,Chat,???  
- **Member List**  
里面列出了所有的成员，如果你发现了~~捣蛋鬼~~某个捣乱的成员~~画了一堆4pp1/6qq1~~，你可以将他踢出或是禁止。  
There's all members in the list,if you find a troublemaker,you can kick or ban this members.
- **Chat**  
可以通过文字进行聊天，同时也可以使用由[Bilibili@喜欢小边牧](https://b23.tv/jNzcSfA)所画的表情符号表达出无法用文字表达出来的想法。  
You can chat with text,also you can use the Emoji made by [Bilibili@喜欢小边牧](https://b23.tv/jNzcSfA) to say something hardly express.
- **???**

## Intranet penetration
在阅读这里之前，你需要理解[什么是IP地址](https://baike.baidu.com/item/IP%E5%9C%B0%E5%9D%80)  
Beforce you read this,you need to know [What is IP Address](https://en.wikipedia.org/wiki/IP_address)
> [!NOTE]
> 这里的内容大部分需要房间发起者需要详细阅读  
> There have something important of the Host.  

如果需要内网穿透，其实虚拟互联网方案更好（主要是写谱面写累了还可以玩别的游戏）。    
If you want to intranet penetration,VLAN(Vitrual LAN) is better (anyway if you're tired just start a local game server like minecraft and let your friend join to relax)  
由于篇幅可能过长，单开几文：  
Maybe these will soo long,there's article link:
- [Easytier (The server is in China Mainland)](easytier.md)
- [Zerotier (The server is in a lot of region)](zerotier.md)