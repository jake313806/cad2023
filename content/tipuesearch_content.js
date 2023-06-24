var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n  請各學員自行準備一副有線耳機, 若使用手機觀看影片, 則可以準備手機適用的有線或無線耳機\n  \n .\n \n \n 本課程為機械設計工程系大二的電腦輔助設計與實習課程, 課程目標在教導學員如何利用電腦輔助機械設計套件建立零組件模型, 並能轉入機電模擬系統中進行控制設計, 目的是能在隨後的協同產品設計實習課程中加以應用.\n \n \n \n 利用全雲端環境上課:\n \n \n Ubuntu server、Replit、Github、Onedrive 與 Onshape 上進行電腦輔助設計與實習.\n \n \n 利用全近端環境上課:\n \n \n 可攜 Python 程式系統、可攜 Solid Edge、Solvespace 、NX 與 CoppeliaSim 上進行電腦輔助設計與實習.\n \n \n \n 課程評分: 線上測驗 (50%), 出席、協同專案與自我評量 (50%).\n \n \n repo:\n  \n  https://github.com/mdecycu/cad2023\n  \n \n \n site:\n  \n  https://mde.tw/cad2023\n  \n \n \n 行事曆\n \n \n \n  全頁檢視\n  \n \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '如何維護網站', 'text': '以下的網站以 cmsimde 作為子模組的 Github Pages 網站維護為主: \n cmsimde 是甚麼? \n cmsimde 是一套網際內容管理系統, 利用 Python Flask 建立動態網站, 讓管理者登入後透過線上編輯器管理大綱式 (Outline-style) 網頁架構, 且轉為靜態網站時將網站內容關鍵字存為字典, 使用者可在靜態網站中以關鍵字搜詢網頁內容. \n cmsimde 還整合網誌與網際簡報, 讓使用者可利用時間流程或專欄記事的方式建立網誌, 並能直接在靜態網站中進行專題簡報. \n 有網路連線時: \n 在 Github 建立帶有 cmsimde 子模組的倉儲, 設定該倉儲的 Github Pages, 以 import 方式指定使用 Python\xa0 主題後, 將倉儲輸入 Replit 中, 利用 Shell 指令 git submodule update --init 取下子模組內容後, 再利用 Shell 指令 pip install flask flask_cors bs4 lxml markdown pelican pyopenssl gevent 等模組後, 以 Run 啟動網站後, 更改管理者密碼, 之後只要 main.py 執行便可利用動態網站維護 config/content.htm 中的內容, 完成後再利用 Convert 指令將 content.htm 中的內容轉為 content 目錄中的靜態網站資料. \n 要將 Replit 上的 cmsimde 網站倉儲內容送回 Github 之前, 必須在 .replit 設定檔案中的 [env] 環境變數區, 設定 GIT_AUTHOR_NAME 與 GIT_AUTHOR_EMAIL 等變數, 才能在利用 Tools 中的 Git 頁面工具進行 git commit -m 指令時綁定使用者身分, 完成改版內容提交後, 可直接在倉儲 .git/config 檔案中置入具有維護 Repo 權限的 Token 後, 在 Git 頁面執行 git push, 或利用 Shell 指令執行 git push, 以便將改版的倉儲內容與 Github 保持同步. 每次改版推送結束後, Github Pages 的設定就會針對改版內容進行轉檔為最新的靜態網站內容. \n 無網路連線時:', 'tags': '', 'url': '如何維護網站.html'}, {'title': 'Projects', 'text': '\n 3D Football Game (透明空間地形與移動裝置中的多足球競技 - pin ball 加上 足球車)\n \n \n \n  2014 The Motor Car\n  \n \n \n \n  2015 A Solar Car Primer\n  \n \n \n \n  2021 The Future of the Automotive Industry\n  \n \n \n \n  https://github.com/jscad/OpenJSCAD.org\n  \n \n \n \n  https://en.wikibooks.org/wiki/OpenJSCAD_User_Guide\n  \n \n \n Arduino DC Motor Control:\n  \n  https://www.tutorialspoint.com/arduino/arduino_dc_motor.htm\n  \n \n \n Arduino AC Motor Control:\n  \n  https://projecthub.arduino.cc/microst/control-a-220vac-universal-ac-motor-with-arduino-fe037e\n  \n \n \n 2023 電腦輔助設計專案\n \n \n 4x4 Rremote Control Car\n \n \n Example Parts List:\n \n \n 2–\n  \n  Arduino UNO\n  \n \n \n 2 -\n  \n  NRF24L01 modules\n  \n (Remote Transmitter and Receiver pair)\n  \n \n 1 – breadboard\n  \n \n 1 – 12V battery (YUASA 不斷電系統電池/NP1.2-12)\n  \n \n 4 – Wheels and Motors (\n  \n  12V Brushed DC Motors\n  \n )\n  \n \n 2 –\n  \n  L293D Motor driver\n  \n (4.5V-36V)\n  \n \n 1 – small box for remote\n  \n \n 4 – Switches\n  \n \n 4 – NiMH/NiCd battery (for remote)\n  \n \n 4 – 10k resistors\n  \n \n 1 - 5v regulator\n  \n \n 2 - 470uF 16v\n  \n \n 2 - 0.1uF Multilayer Monolithic Ceramic Capacitor\n \n \n Reference:\n \n \n \n  https://www.instructables.com/Make-a-4WD-RC-car/\n  \n \n \n \n  https://youtu.be/PHdtGIrSu4o\n  \n \n \n \n  https://youtu.be/ZFEtGOIzGvo\n  \n \n', 'tags': '', 'url': 'Projects.html'}, {'title': 'Solid Edge', 'text': "\n 採用動機: 可以在不連網的環境下使用, 具備\xa0Synchronous Technology functions.\n \n \n \n  Solid Edge 上課教材\n  \n \n \n 以下為參考資料:\n \n \n The following downloads are for @nfu users only.\n \n \n \n  CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation\n  \n \n \n \n  Solid Edge Webinar\n  \n \n \n \n  https://www.themachinedesign.com/category/cad/solid-edge/\n  \n \n \n \n  https://s3.amazonaws.com/s3.mentor.com/plm/solidedge/SolidEdge01-Part_Design-Draft.pdf\n  \n \n \n \n  https://www.themachinedesign.com/solid-edge-tutorial-part-modeling-in-synchronous-mode/\n  \n \n \n \n  Solid Edge with synchronous technology Steering a new course in 3D design.pdf\n  \n \n \n \n  What is Synchronous Technology.pdf\n  \n \n \n \n  Change your modeling approach for better designs.pdf\n  \n \n \n \n  https://solidedge.siemens.com/en/resource/video/design-a-part-using-synchronous-technology/\n  \n (\n  \n  https://www.youtube.com/watch?v=XhoJJzDKFY4\n  \n )\n \n \n \n  同步建模線上研討會\n  \n \n \n Synchronous vs Ordered Methods in Solid Edge:\n  \n  https://youtu.be/XD12cfjvXeE\n  \n \n \n \n  ROI of Solid Edge with Synchronous Technology.pdf\n  \n \n \n \n  Solid Edge with Synchronous Technology course.pdf\n  \n \n \n \n  Dynamic Designer Motion.pdf\n  \n \n \n \n  其他 Solid Egde 與 Femap 相關檔案\n  \n \n \n Synchronous Technology, a feature exclusive to Siemens' Solid Edge software, offers several capabilities that enhance the design and editing process. Here are some areas where Synchronous Technology can be applied:\n \n \n \n  Direct Editing: Synchronous Technology enables direct editing of 3D CAD models, allowing users to modify geometry without relying on feature history. This feature is particularly useful when working with imported or non-native CAD data.\n  \n \n  Live Rules: Synchronous Technology utilizes live rules to maintain design intent while making modifications. These rules automatically adjust related features, dimensions, and relationships as changes are made, ensuring the integrity of the design.\n  \n \n  Flexible Design Modifications: Synchronous Technology enables quick and easy design modifications, such as changing dimensions, adding or removing features, and adjusting geometry. These modifications can be made without constraints imposed by the original feature tree.\n  \n \n  Hybrid Modeling: With Synchronous Technology, users can seamlessly switch between traditional parametric modeling and direct editing, allowing for a hybrid modeling approach that combines the benefits of both methods.\n  \n \n  Working with Imported Data: Synchronous Technology is particularly effective when working with imported CAD data from other software systems. It enables efficient editing and modification of the imported geometry, even without access to the original feature history.\n  \n \n  Fast Conceptual Design: Synchronous Technology allows for rapid conceptual design iterations by providing the flexibility to modify geometry on-the-fly. This helps in exploring multiple design alternatives and making quick design changes based on project requirements.\n  \n \n  Sheet Metal Design: Synchronous Technology includes specific tools for sheet metal design, enabling users to easily modify and edit sheet metal parts without the need for extensive feature editing or remodelling.\n  \n \n  Editability of History-Based Models: Synchronous Technology can be used to edit and modify traditional, history-based models created using parametric design methodologies. It provides a non-destructive editing workflow for making changes to the feature-based history of the model.\n  \n \n \n These are some of the areas where Synchronous Technology in Solid Edge provides unique advantages in terms of design flexibility, speed, and ease of use.\n \n \n Solid Edge community edition:\n \n \n \n  https://www.plm.automation.siemens.com/plmapp/education/solid-edge/zh_tw/free-software/community\n  \n (下載約 4GB, 安裝後佔約 8GB, 授權使用時段: 06-jul-2021 至 31-dec-2025)\n \n \n 需要 Windows 10 Enterprise or Professional (64-bit only) version 20H2 or later, Windows 11 Enterprise or Professional version 21H2 or later,\n  \n  https://developer.microsoft.com/en-us/microsoft-edge/webview2/\n  \n , MS .Net Framework 4.8, MS Visual C++ 2015-2019 redistributable X64\n \n \n 會同時安裝\n  \n  https://www.keyshot.com/\n  \n 11 版\n \n \n SELicense.lic 位於 Preferences 目錄下\n \n \n No Solid Edge Cloud Gateway\n \n \n 圖檔同教育版無法與商業版相容\n \n \n 所建立的工程圖會有浮水印\n \n \n \n  Solid Edge Documentation\n  \n \n \n \n  SE2020 API Documentation\n  \n \n \n 與 NX, Onshape 比較:\n \n \n 自帶使用授權, 可在不上網情況下使用\n \n \n 安裝版 (下載 3.8GB, 安裝後佔 8GB), 適合在自己的電腦或筆電中安裝執行.\n \n \n 可攜版 (下載 4.28GB, 解開後佔 9.4GB), 適合在有防寫卡保護的電腦或虛擬主機中使用.\n \n \n 功能與 SolidWorks, Onshape 相當, 屬於中級 MCAD\n \n \n Solid Edge Hot keys：\n \n \n \n  Esc鍵：取消現行指令回到選取狀態\n  \n \n  Ctrl + F：前視圖 (Front)\n  \n \n  F3 鍵：平面鎖定與解除 Toggle\n  \n \n  Ctrl + I：等角圖 (Isometric)\n  \n \n  N 鍵：切換尺寸標示方向\n  \n \n  Ctrl + R：右側視圖 (Right)\n  \n \n  Ctrl + T：上視圖 (Top)\n  \n \n \n \n", 'tags': '', 'url': 'Solid Edge.html'}, {'title': 'SE_Tutorial', 'text': ' 建立零件   (   Create a part   ) \n  建立組立件   (   Create an assembly   ) \n  局部詳圖簡介   (   Introduction to detailed drawings   ) \n  Solid Edge 模擬簡介   (   Introduction to Solid Edge Simulation   ) \n  同步特徵建模簡介   (   Introduction to modeling synchronous features   ) \n  以同步特徵對中間零件建模   (   Intermediate part modeling with synchronous features   ) \n  順序特徵零件建模簡介   (   Introduction to modeling parts with ordered features   ) \n  建構滑塊組立件   (   Building a slider assembly   ) \n  建構滾輪組立件   (   Building a roller assembly   ) \n 建構組立件家族  ( Building a family of assemblies ) \n 局部放大圖紙  ( Detailing a drawing ) \n 建立 2D 圖紙  ( Creating 2D drawings ) \n 在圖紙上建立孔參數表  ( Creating a hole table on a drawing ) \n 同步特徵和順序特徵零件建模  ( Modeling parts with synchronous and ordered features ) \n 同步鈑金建模簡介  ( Introduction to sheet metal parts with synchronous features ) \n 順序鈑金建模簡介  ( Introduction to ordered sheet metal modeling ) \n 順序輪廓彎邊建模  ( Constructing a contour flange ) \n 建立零件家族  ( Creating a family of parts ) \n 模具部件建模  ( Modeling molded parts ) \n 掃掠特徵建模  ( Modeling swept features ) \n 在零件模型中使用變數  ( Using variables in part model s) \n 從圖紙視圖對零件建模  ( Modeling parts from drawing views ) \n 建立特徵庫  ( Creating a feature library ) \n 使用管路設計建立管件  ( Creating a tube part with XpresRoute ) \n 建構銲接  ( Constructing a weldment ) \n 建立示意圖  ( Creating schematic diagrams ) \n 使用工程計算工具  ( Using engineering calculation tools ) \n Solid Edge 中英文手冊  (for @nfu users only) \n \n  https://solidedge.siemens.com/en/resources/tutorials/  \n  Solid Edge Tutorial  \n  SE for Student  \n  Project Tutorial  \n  Test drive Solid Edge.pdf  \n 在安裝過程利用 regshot 紀錄套件所新增的 .reg, 或可直接將套件放入 USB, 並提供所需的 registry, 就有機會在安裝防寫卡的電腦上直接執行. \n Delete installed registries: \n Powershell commond file: delete_key.ps1 \n # Specify the registry keys and values to delete\n$keysToDelete = @(\n    "HKEY_CURRENT_USER\\Path\\To\\Key1",\n    "HKEY_LOCAL_MACHINE\\Path\\To\\Key2",\n    "HKEY_CURRENT_USER\\Path\\To\\Key3"\n)\n\n# Delete the specified keys and values\nforeach ($key in $keysToDelete) {\n    Write-Host "Deleting key: $key"\n    Remove-Item -Path "Registry::$key" -Recurse -Force\n}\n \n or read the installed .reg and delete keys by reading .reg file: \n # Define the path to the .reg file\n$regFilePath = "C:\\path\\to\\your\\file.reg"\n\n# Read the content of the .reg file\n$regContent = Get-Content -Path $regFilePath -Raw\n\n# Delete the registry entries\ntry {\n    # Disable registry redirection to avoid issues with 32-bit and 64-bit keys\n    if ([Environment]::Is64BitProcess) {\n        Set-ItemProperty -Path "HKLM:\\Software\\Microsoft\\Wow6432Node\\Microsoft.PowerShell\\Registry::HKCU" -Name "DisableRedirection" -Value 1\n    } else {\n        Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer" -Name "NoChangeStartMenu" -Value 1\n    }\n    \n    # Import the .reg file to delete the registry entries\n    $null = Invoke-Expression -Command $regContent\n}\nfinally {\n    # Re-enable registry redirection\n    if ([Environment]::Is64BitProcess) {\n        Remove-ItemProperty -Path "HKLM:\\Software\\Microsoft\\Wow6432Node\\Microsoft.PowerShell\\Registry::HKCU" -Name "DisableRedirection" -ErrorAction SilentlyContinue\n    } else {\n        Remove-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer" -Name "NoChangeStartMenu" -ErrorAction SilentlyContinue\n    }\n}\n \n  https://sourceforge.net/projects/regshot/  \n Regshot is an open-source (LGPL) registry compare utility that allows you to quickly take a snapshot of your registry and then compare it with a second one - done after doing system changes or installing a new software product.', 'tags': '', 'url': 'SE_Tutorial.html'}, {'title': 'NX', 'text': '\n 採用動機: CAD/CAE/CAM 功能完整的高階電腦輔助機械設計套件\n \n \n \n  NX2027.3401_lite_cad2022.7z\n  \n for @nfu users only\n \n \n \n  NX_help for 1899\n  \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Onshape', 'text': '\n 採用動機: 全雲端中階電腦輔助機械設計套件, 近端電腦無需安裝套件, 可在手機與平板中的 Onshape App 中使用.\n \n \n \n  https://www.onshape.com/en/education/\n  \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Solvespace', 'text': '\n 採用動機: 提供 C++ 原始碼的參數式電腦輔助設計繪圖套件, 檔案可直接放入 USB 隨身碟操作, 且可練習使用 C++ 編譯器自行編譯.\n \n \n \n  https://solvespace.com/index.pl\n  \n \n \n \n  https://github.com/solvespace/solvespace\n  \n \n \n \n  https://www.farwire.net/SolveSpace-LearningGuide.htm\n  \n \n \n \n  https://solvespace.readthedocs.io/_/downloads/en/latest/pdf/\n  \n \n \n \n  Theory behind Solvespace\n  \n \n \n \n  2019 Advanced CAD Modeling\n  \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'SketchFlat', 'text': '\n \n  https://cq.cx/sketchflat.pl\n  \n (\n  \n  https://cq.cx/index.pl\n  \n )\n \n \n \n  https://github.com/scrum-1/SketchFlat2019\n  \n \n \n \n  sketchflat_source_and_exe.7z\n  \n \n', 'tags': '', 'url': 'SketchFlat.html'}, {'title': 'CoppeliaSim', 'text': '\n 採用動機: 提供 C++ 原始碼, 可與 MCAD 結合建立機電資虛實整合模擬系統.\n \n \n \n  https://www.coppeliarobotics.com/\n  \n \n \n \n  https://github.com/CoppeliaRobotics\n  \n \n \n \n  Modeling and Control of a Spherical Robot in the CoppeliaSim Simulator\n  \n \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'PICSimLab', 'text': '\n \n  https://www.youtube.com/watch?v=be96Ds8umig\n  \n \n \n Arduino\n \n \n \n  https://github.com/lcgamboa/picsimlab\n  \n Programmable IC Simulator Laboratory\n \n \n \n  https://www.arduino.cc/en/software\n  \n Arduino IDE\n \n \n \n  https://com0com.sourceforge.net/\n  \n Null-modem Emulator\n \n \n PICSimLab 模擬 Arduino Uno (COM6) 與 Stepper Motor:\n \n \n \n \n \n \n \n \n 透過 PICSimLab Pin Viewer, 將 PB0/8, PB1/~9, PB2/~10 與 PB3/~11 與 Stepper Motor 接線.\n \n \n \n \n \n 透過 com0com 模擬 COM6 <-> COM4 連線.\n \n \n \n \n \n Arduino IDE 將 Stepper Motor 控制程式編譯後透過 COM4 經由 com0com 將程式經由 COM6 上傳到 Virtual Arduino Uno board.\n \n \n \n \n \n 接著希望可以利用 CoppeliaSim zmqRemoteAPI Python 讀取 PICSimLab 控制 Stepper Motor 的資料, 用來同步控制位於 CoppeliaSim 場景中的 Virtual Stepper Motor.\n \n \n Reference:\n \n \n \n  HoRoSim, a Holistic Robot Simulator: Arduino Code, Electronic Circuits and Physics\n  \n (\n  \n  pdf\n  \n )\n \n \n \n  scrum-1/horosim (github.com)\n  \n \n', 'tags': '', 'url': 'PICSimLab.html'}, {'title': 'Models', 'text': '\n \n  https://github.com/CoppeliaRobotics/models\n  \n \n \n \n  https://github.com/mdecourse/V-REP-demo\n  \n \n \n \n  https://github.com/mdecycu/Active-Perception\n  \n \n \n \n  https://github.com/mdecourse-org/V-Rep\n  \n \n \n \n  https://github.com/mdecourse-org/vrep-volleyball\n  \n \n \n \n  https://github.com/mdecourse/Autonomous-car-simulation\n  \n \n \n \n  https://github.com/mdecourse/First_Project\n  \n \n \n \n  https://github.com/mdecourse/Ball-Tracking-Mobile-Robots\n  \n \n \n \n  https://github.com/mdecourse/Ball-Balancing-Machine\n  \n \n \n \n  https://github.com/mdecourse/CoppeliaSim-Blender-Tools\n  \n \n \n \n  https://github.com/mdecourse/Vision_Project_M1\n  \n \n \n \n  https://github.com/mdecourse/self-driving-car-simulation\n  \n \n \n \n  https://github.com/mdecourse-org/PID_wall_following\n  \n \n \n \n  https://github.com/mdecourse-org/coppelia_gui_robot_control_python\n  \n \n', 'tags': '', 'url': 'Models.html'}, {'title': 'Research', 'text': '\n 類比電腦與磁浮控制系統設計\n \n \n Analog computer and magnetic levitation control system design\n \n \n \n  DPAC: Digitally Programmable Analog Computer\n  \n \n \n \n  Construction and control of a magnetic levitation system\n  \n \n \n \n  Magnetic Levitation System\n  \n \n \n \n  Magnetic Levitation System: Senior Project Report\n  \n \n \n \n  MagLev\n  \n \n \n \n  Control of a Ball and Plate System Using Model-Based Controllers\n  \n \n \n \n  Motor Control Systems Analysis, Design, and Optimization Strategies for a Lightweight Excavation RobotStrategies for a Lightweight Excavation Robot\n  \n \n \n \n  Understanding and Design of an Arduino-based PID Controller\n  \n \n \n \n  https://github.com/mdecourse/Ball-Balancing-Machine\n  \n \n \n \n  https://stackoverflow.com/questions/54191098/how-can-i-detect-if-a-object-ballbeing-tracked-using-opencv-passed-through-a-g\n  \n \n \n \n  https://github.com/mdecourse/TableSoccerCV\n  \n \n \n \n  https://kananvyas.medium.com/player-and-football-detection-using-opencv-python-in-fifa-match-6fd2e4e373f0\n  \n \n \n \n Study of the ball balance platform in the cyber-physical integration environment\n  \n \n 虛實整合環境中的圓球平衡台研究\n \n \n \n  https://github.com/mdecourse/Ball-Balancing-Machine\n  \n \n \n \n  2019 Construction and theoretical study of a ball balancing platform\n  \n \n \n \n  2019 Cyber-Physical System Framework for Measurement and Analysis of Physical Activities\n  \n \n \n \n  A Cyber Physical Interface for Automation Systems—Methodology and Examples\n  \n \n \n \n  A review of component-in-the-loop: Cyber-physical experiments for rapid system development and integration\n  \n \n \n \n  An Analysis-Driven Rapid Design Process for Cyber-Physical Systems\n  \n \n \n \n  From the Browser to the Remote Physical Lab: Programming Cyber-physical Systems\n  \n \n', 'tags': '', 'url': 'Research.html'}, {'title': 'Brython', 'text': '\n cmsite: wcms use\n  \n  https://github.com/mdecycu/cmsimde\n  \n as submodule\n \n \n \n  https://en.wikipedia.org/wiki/Python_(programming_language)\n  \n \n \n Examples:\n \n \n \n  https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d\n  \n \n \n \n  https://www.geeksforgeeks.org/python-programming-examples/\n  \n \n \n \n  https://www.programiz.com/python-programming/examples\n  \n \n \n \n  https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/\n  \n \n \n Python Tutorial:\n \n \n \n  https://docs.python.org/3/tutorial/\n  \n \n \n \n  An informal introduction to Python\n  \n \n \n Indentation\n \n \n Variables\n \n \n Comments\n \n \n \n  Numbers\n  \n \n \n \n  Strings\n  \n \n \n print\n \n \n \n  Python control flow tools\n  \n \n \n \n  for\n  \n \n \n \n  if\n  \n \n \n \n  range\n  \n \n \n open\n \n \n read\n \n \n \n  lists\n  \n \n \n \n  tuples\n  \n \n \n \n  dictionaries\n  \n \n \n \n  functions\n  \n \n \n \n  try ... except\n  \n \n \n \n  break\n  \n \n \n \n  pass\n  \n \n \n \n  classes\n  \n \n \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 (\n  \n  practice_html.txt\n  \n 動態頁面超文件).\n \n \n \n  practice_html.txt\n  \n 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用.\n \n \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為\n  \n  class\n  \n 後, 在範例導入時透過\n  \n  instance\n  \n 引用.\n \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n \n 從 1 累加到 100:\n \n \n \n  1 add to 100\n  \n \n \n 將 iterable 與 iterator\n  \n  相關說明\n  \n , 利用 Brython 與 Ace Editor 整理在這個頁面.\n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n \n  add 1 to 100 結束 \n \n  editor1 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n \n  存擋表單開始  \n \n \n \n  Filename:\n   \n  .py\n  \n \n \n \n  存擋表單結束  \n \n \n \n \n  執行與清除按鈕開始  \n \n \n \n  Run\n  \n \n  Output\n  \n \n  清除輸出區\n  \n \n  清除繪圖區\n  \n \n  Reload\n  \n \n \n  執行與清除按鈕結束  \n \n \n \n \n  程式執行 ouput 區  \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n  editor1 結束  \n \n  ##########################################  \n \n 從 1 累加到 100 part2:\n \n \n \n  1 add to 100\n  \n \n  cango_three_gears\n  \n \n  BSnake\n  \n \n  AI Tetris\n  \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n  add 1 to 100 part2 開始  \n \n \n \n  add 1 to 100 part2 結束 \n \n  editor2 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n \n  存擋表單開始  \n \n \n \n  Filename:\n   \n  .py\n  \n \n \n \n  存擋表單結束  \n \n \n \n \n  執行與清除按鈕開始  \n \n \n \n  Run\n  \n \n  Output\n  \n \n  清除輸出區\n  \n \n  清除繪圖區\n  \n \n  Reload\n  \n \n \n  執行與清除按鈕結束  \n \n \n \n \n  程式執行 ouput 區  \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'Brython.html'}]};