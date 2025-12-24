# 制谱
> [!NOTE]
> 这篇文章已经假设你对舞萌有一定了解，如果你没有，请前往哔哩哔哩阅读相关的专栏。
This article is assuming that you already have the relevant knowledge, if you don't have,please go to inquire about maimaiDX.

在制谱时，你需要获取音乐的mp3/ogg文件，单独开一个文件夹，将音频文件与PV（pv.mp4）、曲绘（bg.png）放在文件夹里面，随后使用[打开](/guide/gui#打开)功能导入音频文件。
When making charts, you need to get a mp3/ogg files about the song you'll use.
如果你已经有了maidata，那么可以使用[导入maidata](/guide/gui.md#导入maidata)来将你已经写好的谱面导入到里面。
If you already have maidata file,then you can use  import maidata to import the charts that have already been made.
## Adjust BPM
在导入音频后，你可以看到在[轨道区域](/guide/gui.md#轨道区域)内的BPM栏上面看到有BPM显示框，如果默认的BPM并非你所需要的BPM,你可以左键单击BPM显示框，随后用阿拉伯数字输入你所使用的BPM
After import the song, you can see BPM display box at the track area's BPM track, if default's BPM is not the BPM you need,you can tap LMB  in the BPM display box,then input the BPM you will use
## Place Note(s)
- 你可以在两个地方放置Tap音符：轨道和预览窗口。在轨道上，你可以按照你之前调整的[分音](/guide/gui.md#分音)在固定列放置Tap；在预览窗口上，你可以用鼠标滚轮滑动到合适的位置，在需要放置Tap的**外键**点击。
- you can place the Tap note at 2 places: track and preview window. At the track, you can place the Tap in a fixed column according to the split sound. At the preview window,you can use the mouse wheel to scroll to the desired position, and tap LMB at the **outside buttons**.
- 你可以在轨道放置Hold音符。在轨道上，你可以按照你之前调整的[分音](/guide/gui.md#分音)在固定列放置Hold起点，在合适的位置在固定列放置Hold终点。
- You can place the Hold notes at track. In the track, you can place the Hold startpoint  in a fixed column according to the split sound,and place the Hold endpoint in the correct position on the fixed column.
- 你可以在轨道放置Slide音符。在轨道上，你可以按照你之前调整的[分音](/guide/gui.md#分音)在固定列放置Slide起点（星星），在合适的位置放置滑动起点，最后在合适的位置放置滑动终点，在预览窗口内画出滑动轨迹。  
- 若你开启了[一拍后启动星星](/guide/gui.md#一拍后启动星星)，则无需设置滑动起点；若你开启了[应用FESTiVAL特性](/guide/gui.md#应用festival特性)，则可以多次折返Slide甚至画出来文字押。  
- 如果你希望画出Slide同头滑条，那么需要在画完第一个后再次左键Slide起点，此时会让你再次放置一个新的Slide滑条。
## Touch的放置
- 你可以在预览窗口放置Touch音符。在用鼠标滚轮将音乐调整到合适的位置后，按照判定区直接点击鼠标左键即可放置Touch,也可按住鼠标左键并滑动以放置多押。
- 你可以在预览窗口放置TouchHold音符。在用鼠标滚轮将音乐调整到合适的位置后，按照判定区直接点击鼠标左键即可放置TouchHold起点，在合适的位置点击鼠标左键即可放置TouchHold终点。
- 若你开启了[烟花](/guide/gui.md#烟花)，放置Touch类音符时可以让特效以Touch类音符为中心放出全屏特效。
## 其他
这里写了一些其他的功能，由于特别简单基本上一笔带过。
### 无理
如果你写了一个Tap三押，那么会在[轨道区域](/guide/gui.md#轨道区域)旁有提示，同时也可以使用[上一个/下一个无理](/guide/gui.md#上一个下一个无理)查看无理。
### 元数据
元数据是标识一个谱面的基本，里面有谱面的曲名、曲师、谱面难度、谱师等。