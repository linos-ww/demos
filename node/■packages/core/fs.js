const fs = require("fs");

// 获取文件尺寸
function stat(path) {
    fs.stat(path, (err, stat) => {
        console.log(stat.size / 1024 / 1024);
    });
}

// 写入文件
function writeFile(filename, content) {
    fs.writeFile(filename, content);
    fs.writeFileSync(filename,content)
  }
  
  // 复制文件
  function copyFile(filePath, targetPath) {
    fs.copyFile(filePath, targetPath);
    fs.copyFileSync(filePath, targetPath);
  }
  
  // 读取指定路径下的所有文件
  function readdir(path) {
    fs.readdir(path);
    fs.readdirSync(path)
  }
  // 判断文件夹或者文件
  function file_or_folder(path) {
    let info = fs.lstatSync(path);
    console.log(info.isFile());
    console.log(info.isDirectory());
  }
  // 删除文件夹或文件
  function rm(filepath, folderpath) {
    fs.rm(filepath, () => {});
    fs.rm(folderpath, { recursive: true }, () => {});
  }
  
  // 移动或重命名文件
  function rename(oldpath, newpath) {
    fs.rename(oldpath, newpath);
    fs.renameSync(oldpath, newpath);
  }
  
  