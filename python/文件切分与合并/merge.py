import os
file=open(r'split/原文件.pdf','wb')
for i in os.listdir('split'):
    pack=open(r'split/'+i,'rb')
    file.write(pack.read())
file.flush()
file.close()
print('合并文件完成')

