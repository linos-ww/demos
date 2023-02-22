import os

def group_rename(path:str,ext:str)->None:
    '''批量修改文件后缀'''
    names=os.listdir(path)
    for filename in names:
        name,old_ext=os.path.splitext(filename)
        oldpath=os.path.join(path,filename)  
        newpath=os.path.join(path,name+ext)
        os.rename(oldpath,newpath)




