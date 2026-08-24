# EasyGoSIM 網站工作總結

最後整理日期：2026-08-24  
目前香港網站正式版本：`d3760d9`  
網站：<https://hk.easygosim.us/>  
結帳／會員網站：<https://checkout.easygosim.us/>

## 1. 網站 UI、手機版及 Logo

已完成：

- 統一產品頁方案、日數、立即購買按鈕。
- 統一選中、hover、focus 狀態及按鈕點擊範圍。
- 手機版按鈕最少 48px，手機底部購買列加留白，避免遮住日數按鈕。
- 中港澳「每日 1GB」選中後顯示綠色。
- 全站改用 EasyGoSIM 正式 Logo，移除地球村／舊 Logo 顯示。
- 修正首頁會員登入／註冊入口及手機版導覽。
- 日本產品頁 Footer 重覆連結已移除。
- 日本酒店 CP 值文章頁改用日本 eSIM 指南同款文章卡片、顏色、Header、Footer、CTA 及手機間距。
- Help Center 排障頁統一 Header、內容寬度、文章卡片及手機版 UI。

主要提交：`756fcb6`、`7dff113`、`9009bf3`、`d3760d9`

## 2. 會員登入、Google／Facebook

已完成／設定過：

- 會員註冊、登入及會員中心。
- Google OAuth 註冊／登入流程。
- Facebook OAuth 曾完成設定及審核流程，但後來按要求暫時移除 Facebook 登入入口。
- 電郵會員可登入及管理訂單。
- 會員中心可查看訂單及重新發送 eSIM 電郵。
- 註冊後發送一次性迎新優惠碼及下單教學。
- 會員登入後可把會員電郵帶入結帳流程，減少重覆輸入。
- 已處理 OAuth `bad_oauth_state` 及回到 Backend 頁面的問題。

注意：Google OAuth 供應商頁可能顯示 Supabase 專案網域 `yddbkcyhovkpxvvolpxz.supabase.co`；這是 OAuth 技術識別，不是客戶品牌名稱。Google 品牌驗證及自訂網域是另外的設定項目。

## 3. 結帳、Airwallex 及優惠碼

已處理：

- 會員電郵可帶入 Airwallex 結帳頁。
- 迎新優惠碼自動帶入指定產品。
- 移除已取消的 `SUMMER10` 文案。
- 修正零元優惠訂單觸發 `orders_amount_check` 的資料庫錯誤方向。
- 修正 `marketing_message_key` 欄位不存在的部署問題方向。
- 統一產品頁購買按鈕文字及跳轉行為。

目前結帳流程仍要以正式網站逐個 SKU 做 smoke test；Airwallex 頁面本身仍可能要求確認付款電郵，這是付款供應商資料需求，不等於會員登入失效。

## 4. 產品 SKU、地區及內容

已完成：

- 日本產品頁由資料庫 API 讀取有效 SKU。
- 日本評論由公開 reviews API 讀取，並保留備用評論。
- 修正中港澳、香港、澳門、中國內地及日本產品名稱／覆蓋內容混用問題。
- 完成頁、會員中心、電郵及結帳頁改為按 SKU 對應產品內容，不再固定顯示「日本 eSIM」。
- 修正「韓國每日 2GB」錯誤顯示於中港澳訂單的問題方向。
- 首頁加入日本、中國、泰國、韓國、台灣、英國、歐洲、亞太、港澳及全球目的地入口。

## 5. eSIM、JoyTel 及流量查詢

已加入／規劃：

- 會員中心 eSIM 詳情區。
- JoyTel Usage Query、Status Query、Profile Query 的整合方向。
- 可顯示使用狀態、已使用流量、EID 及裝置資料（前提是訂單有可用 query 憑證）。
- 舊訂單沒有憑證時不再把技術錯誤訊息直接展示給客戶。

限制：舊訂單若沒有 JoyTel coupon／query 憑證，不能追溯流量或 EID；這是供應商資料限制，不是 UI 問題。

## 6. Email、Resend 及 Marketing Tracking

已完成／設定過：

- Resend 電郵發送迎新優惠碼。
- Resend 電郵發送 eSIM QR Code 及安裝資料。
- 會員中心重新發送 eSIM 電郵。
- Email tracking 功能已部署。
- `EMAIL_FROM`、Resend API 及驗證寄件網域設定流程已處理。

## 7. SEO、Help Center 及文章頁

已完成：

- 首頁加入 Help Center、安裝教學、日本 eSIM 指南、中國內地短途指南及網絡排障 FAQ 導覽。
- 桌面版顯示快速閱讀 SEO 導覽，手機版改為內容中心選單。
- 發布 Help Center：
  - `/help/`
  - `/help/compatibility/`
  - `/help/installation/`
  - `/help/troubleshooting/`
- 移除客戶不應看到的內部標籤 `HELP CENTRE · GEO CONTENT`，改為「EasyGoSIM 使用指南」。
- 發布文章：
  - `/blog/japan-esim-guide/`
  - `/blog/mainland-short-trip-esim-guide/`
  - `/blog/japan-hotel-cp-ranking/`
- 日本酒店頁及日本 eSIM 指南設計已統一。

## 8. Railway、Supabase、部署及 Bug

已完成／處理過：

- Production schema baseline 已完成。
- 部署前加入 migration status、必要欄位驗證及 checkout smoke test gate。
- 新 migration 與程式碼同一 Git commit 的部署方向已建立。
- 曾處理 Prisma advisory lock／migration status 卡住問題。
- 正式網站靜態頁面透過 `hk` GitHub repository 部署。

目前香港網站最新正式提交：`d3760d9`。  
Backend repository 的 API、Prisma、Supabase 及 Railway 變更需要另行以 backend 部署紀錄核對，不能只看香港靜態網站 Git log。

## 仍需跟進

- 逐個目的地及 SKU 做正式 checkout smoke test。
- 確認所有 Help Center、文章及首頁快速閱讀連結在 CDN 快取更新後均為 200。
- 重新檢查手機版：首頁、所有產品頁、結帳頁、會員中心、Help Center。
- 如要重新啟用 Facebook 登入，需先確認 Meta App 狀態及 OAuth 設定。
- 將未整理的其他工作區變更分拆成獨立 commit，避免不同對話區互相影響。

## 建議對話區分類

1. `01｜網站 UI、手機版、Logo`
2. `02｜會員登入、Google、Facebook`
3. `03｜結帳、Airwallex、優惠碼`
4. `04｜產品 SKU、地區內容`
5. `05｜eSIM、JoyTel、流量查詢`
6. `06｜Email、Resend、Marketing Tracking`
7. `07｜SEO、網站檢查`
8. `08｜Railway、Supabase、部署及 Bug`

