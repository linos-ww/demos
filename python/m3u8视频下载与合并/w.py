import requests as req
import os
'''
以文本形式打开m3u8文件,找到其.ts文件的名字,会有一个范围,例如abc000.ts--------abc.773.ts
存一下这个m3u8文件的链接.例如是http://abcd/abc.m3u8
那么你应当在一个循环中请求http://abcd/abc000.ts这样的视频文件(有的m3u8文件里面直接就是完整的视频地址,不需要自己拼接)
也有的m3u8文件里面没有ts文件范围名称,而是另一个m3u8文件的名字这个时候你就要再去找新的http://abcd/***.m3u8
下面是伪代码
 '''
url = 'http://abcd/abc'

'''请求每一个视频片段'''
for i in range(0,774):
    f=open(str(i)+'.ts','wb')
    R=req.get(url+str(i).zfill(3))
    f.write(R.content)
    f.flush()
    f.close()
    print(i,'缓存完成')



'''合并视频'''
F=open('ss.mp4','wb')
for i in range(0,774):
    f=open(str(i)+'.ts','rb')
    F.write(f.read())
    print(i,'合并完成')
F.flush()
F.close()

