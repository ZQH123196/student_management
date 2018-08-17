#!/bin/bash

# 写入目录
tree -L 3 --filelimit 20 > "目录结构".md

# 写入更新日期
echo -n 更新日期： >> "目录结构".md && date >> "目录结构".md

# 向控制台最后一行
tail -n 1 目录结构.md
