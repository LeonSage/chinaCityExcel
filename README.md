# chinaCityExcel
基于2020/09/08的中国省市对应表，文件目录为：static/json/china_city.json。

数据源为：https://github.com/WenryXu/ChinaCity/edit/master/ChinaCityList.json

1. 你可以直接下载中国城市和省份对应的excel表格，目录为：  static/toFile/中国省市对应表.xlsx。

2. 如果你有定制的需求，也可以手动更改原始数据并将其重新转换为excel文件。

# 使用方式
1. 下载nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

2. 安装并使用指定node版本
```
nvm install 10.16.3
nvm use 10.16.3
```

3. 下载本代码库到本地
```
git clone https://github.com/LeonSage/chinaCityExcel.git
```

3. 安装npm包依赖
  `npm i`

4. 执行入口文件
  `node index.js`

5. 到指定目录打开转换后的文件即可
