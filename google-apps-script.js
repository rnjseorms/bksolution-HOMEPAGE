// ============================================
// Google Apps Script - 부광솔루션즈 상담 신청 폼
// ============================================
//
// [설정 방법]
// 1. Google Sheets에서 해당 시트 열기
//    https://docs.google.com/spreadsheets/d/19PZrUgS1QO5-eYHwPNUHXXwtmvYuAgO5d32eWSAm-lI
//
// 2. 상단 메뉴 > 확장 프로그램 > Apps Script 클릭
//
// 3. 아래 코드 전체를 복사해서 붙여넣기
//
// 4. 상단 메뉴 > 배포 > 새 배포
//    - 유형: 웹 앱
//    - 실행 사용자: 본인 (나)
//    - 액세스 권한: 모든 사용자 (Anyone)
//    - 배포 클릭
//
// 5. 배포 URL을 복사하여 contact-form.tsx의
//    GOOGLE_SCRIPT_URL 변수에 붙여넣기
//
// ============================================

const SHEET_ID = '19PZrUgS1QO5-eYHwPNUHXXwtmvYuAgO5d32eWSAm-lI';
const SHEET_NAME = '상담신청';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // 시트가 없으면 자동 생성 + 헤더 추가
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        '접수일시',
        '이름',
        '연락처',
        '업체명',
        '사업자번호',
        '사업장지역',
        '시/군/구',
        '연 매출',
        '업종',
      ]);
      // 헤더 스타일
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    // 데이터 행 추가
    sheet.appendRow([
      new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      data.name || '',
      data.phone || '',
      data.company || '',
      data.bizNumber || '',
      data.region || '',
      data.city || '',
      data.revenue || '',
      data.industry || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 처리 (CORS preflight 대응)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success', message: 'API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
