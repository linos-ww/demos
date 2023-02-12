import os
os.mkdir('split')
packsize=int(input('输出一块大小,单位M:'))*1024*1024
packnum=int(os.path.getsize('镜花缘.pdf')/1024/1024)+1
file=open('镜花缘.pdf','rb')
for i in range(1,packnum+1):
    pack=open(r'split/pack'+str(i),'wb')
    pack.write(file.read(packsize))
    pack.flush()
    pack.close()
print('切分完成')
    

