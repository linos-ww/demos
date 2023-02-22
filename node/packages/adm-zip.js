const ADMZip = require("adm-zip");

// 生成压缩包
function generate_zip() {
    let zip = new ADMZip();
    // 添加本地文件
    zip.addLocalFile("./tasks.txt");
    // 本地目录中的内容添加到压缩包内的指定目录
    zip.addLocalFolder("./Desktop", "d");
    // 添加内存中的内容,并指定编码
    zip.addFile("content.txt", Buffer.from("这里是内容json", "utf-8"));
    // 生成zip包
    zip.writeZip("xxx.zip");
}

