# EasyGoSIM 完整網站交接文件

最後更新：2026-08-24  
用途：網站 UI、產品頁、會員、結帳、Email、SEO 及部署的唯一交接文件

> 舊對話只作歷史參考。新修改必須先對照本文件及日本產品頁 `/jpesim/`，再決定是否實作。

## 1. 正式網站及專案

| 項目 | 位置 |
|---|---|
| 香港網站 | <https://hk.easygosim.us/> |
| Checkout | <https://checkout.easygosim.us/> |
| 日本產品樣版 | <https://hk.easygosim.us/jpesim/> |
| 合作夥伴頁 | <https://hk.easygosim.us/jpesim/partners/> |
| 靜態網站 Git | `C:\Users\admin\Documents\esim sale\hk-site` |
| 靜態網站 Git remote | `https://github.com/chifung126-svg/hk.git` |
| Backend／Checkout 工作區 | `C:\Users\admin\Documents\esim sale` |

正式網站目前以 `.us` 為準；`.com` 不可當作已完成切換的正式網域。

## 2. 唯一 UI 樣版

所有國家、多地及跨境產品頁，都必須跟隨日本頁的版面及互動規格：

- 黃色提示列
- EasyGoSIM 正式 Logo
- Sticky Header 及客服入口
- 左側國家視覺／網絡資料
- 右側產品名稱、最低價格、信任標籤及方案選擇器
- 統一方案按鈕、日數按鈕及綠色立即購買按鈕
- 手機固定購買列
- 產品優勢、安裝方法、手機支援、FAQ、會員評論及 SEO 指南

完整視覺規格見：

[`EASYGOSIM_PRODUCT_PAGE_UI_RULES.md`](./EASYGOSIM_PRODUCT_PAGE_UI_RULES.md)

### 內容可以不同，UI 不可以不同

每頁只可更換：

- 國家／地區名稱及旗幟
- 圖片、網絡名稱及覆蓋範圍
- 流量、速度、日數、限制、SKU 及價格
- 相應國家 FAQ、SEO 及安裝內容

禁止把日本名稱、圖片、SKU、網絡或評論套到其他產品。

## 3. 目前產品入口

主要產品頁包括：

- `/jpesim/` 日本
- `/china/` 中國內地
- `/chma/` 港澳／中港澳跨境
- `/thailand/` 泰國
- `/korea/` 韓國
- `/taiwan/` 台灣
- `/europe/` 歐洲
- `/uk/` 英國
- `/vietnam/` 越南
- `/apac/` 亞太多地
- `/sm/` 新馬印泰
- `/world/` 全球多地

首頁快速目的地選擇列只負責選擇產品頁；流量及日數在相應產品頁選擇，不能在首頁重複建立另一套方案選擇器。

## 4. 首頁規格

首頁需維持以下順序：

1. 簡潔 Header 及會員／Help 入口
2. 置中 Hero 標題及 EasyGoSIM 說明
3. 「旅行目的地」選擇列
4. 主要目的地卡片
5. 信任元素：QR Code、香港客服、安全付款
6. 產品優勢及三步安裝
7. FAQ
8. 「已驗證會員評論」
9. SEO／Help 入口及 Footer

首頁評論區固定放在 FAQ 之後，並顯示：

- `已驗證會員評論`
- `★ 4.5`
- 評論數量
- 已完成付款會員標示
- 查看相應產品評論 CTA

## 5. 會員及登入

- Email＋密碼登入：保留現有會員使用。
- Google OAuth：可註冊及登入，並發送一次性迎新優惠碼。
- Facebook OAuth：未確認正式可用前，不顯示入口。
- 會員中心：查看訂單、付款狀態、QR Code／安裝資料及重新發送電郵。
- 登入後購物：會員電郵應自動帶入 checkout，避免重複輸入。
- 迎新禮：每個會員只可獲一次指定中國＋澳門／中港澳方案優惠碼。
- 即棄電郵：按網域資料庫封鎖已知臨時信箱；不得假設可以百分百阻止所有新網域。

## 6. Checkout 及 SKU

- Checkout 產品名稱、地區、流量、日數、價格及幣種必須由相應 SKU 讀取。
- 完成頁、會員中心、Email 及 checkout 必須使用同一產品資料來源。
- 不可寫死「日本 eSIM」或任何單一國家文案。
- 優惠碼需在資料庫、checkout 及 Email 文案同步。
- 會員預填 Email 後，Airwallex 頁面仍須以付款所需資料為準；不可重複建立不同會員身份。
- 每次新增 SKU 必須檢查產品頁入口、variant、價格、優惠碼、checkout、完成頁及 Email。

## 7. Email、Resend 及履行

- 註冊迎新 Email：寄出一次性優惠碼及下單教學。
- 付款完成 Email：寄出 QR Code 及安裝資料。
- 會員中心可重新發送 eSIM Email。
- Email 產品名稱必須與訂單 SKU 一致。
- Three UK 等人工履行產品，必須先確認真實履行流程，再決定「即時發送」或「客服處理」文案。
- Resend API key、Email secret 及環境變數不可寫入 Markdown、HTML 或 Git。

## 8. eSIM／JoyTel

會員中心可按新訂單顯示：

- Profile 狀態
- 啟用狀態
- 使用流量
- EID／裝置資料（API 有資料時）

舊訂單沒有 `coupon`／`snPin` 時，不顯示技術錯誤；改顯示「此舊訂單暫未提供流量及裝置資料」。

## 9. SEO、Help 及文章

主要入口：

- `/blog/`：所有旅遊 SEO 文章總覽
- `/help/`：Help Center
- `/setup/`：安裝教學
- `/help/troubleshooting/`：網絡排障
- `/blog/japan-esim-guide/`：日本 eSIM 指南
- `/blog/japan-hotel-cp-ranking/`：日本酒店 CP 值文章

規則：

- 桌面及手機都要有 Help／SEO 入口。
- SEO 長文不可壓過產品選購區。
- 每頁只保留一個主要 H1。
- title、description、canonical、OG 及產品資料必須對應國家。
- 所有導覽連結必須避免 404 及重複 Footer 連結。

## 10. 手機版驗收

以 390px 寬度檢查，並兼容 320–430px：

- Logo、Help／SEO、會員入口清楚可見。
- 方案及日數按鈕最小點擊區域 44px。
- 固定購買列不遮住最後一行日數按鈕。
- 產品圖、卡片及文字不橫向溢出。
- 產品名稱、價格及 CTA 在首屏可理解。
- 所有底部固定元素都有安全區及足夠底部留白。

## 11. 部署及 Git 規則

- 靜態網站與 Backend 是不同 Git 專案，必須分開 review。
- 不使用 `git add .`。
- 只提交本次確認的檔案。
- 部署前跑 `git diff --check`。
- 檢查相關頁面、手機版、連結、SEO 及 checkout smoke test。
- 不把本地預覽伺服器檔案提交到 production。
- Migration、資料庫欄位及 Backend 版本必須先確認一致。
- 不把 API key、密碼、webhook secret 或資料庫連線字串提交到 Git。

## 12. 目前版本紀錄

最近正式推送至靜態網站的產品頁／首頁版本：`2632f3d`。  
本文件及 UI 規格屬交接文件，後續修改應在新 commit 中清楚記錄。

## 13. 新增或修改產品頁的固定流程

1. 先以 `/jpesim/` 比對版面，不先寫新 UI。
2. 確認國家、SKU、價格、網絡、覆蓋及產品限制。
3. 套用共用產品 CSS／JS。
4. 替換相應內容，不複製日本資料。
5. 測試桌面、390px 手機、方案、日數及立即購買連結。
6. 檢查評論、FAQ、Help／SEO、Footer 及 canonical。
7. 只提交相關檔案，先讓使用者預覽。
8. 使用者確認後才部署。

