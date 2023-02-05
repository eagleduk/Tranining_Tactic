# React 에서의 .env 파일 사용

REACT_APP\_[Key] = [Value] 형식으로 작성하면 dotenv package 없이 사용 가능

# 스크롤 체이닝

자식 스크롤이 끝나면 부모 스크롤이 이루어지는 현상.
모바일 브라우저에서 스크롤( 드래그 ) 를 하면 application 전체가 스크롤 되는 듯한 현상.
body style 에 `overscroll-behavior: contain;` 을 추가 해서 방지한다.
하지만 IPhone Safari 에서는 아직 지원이 되질 않는다.
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#browser_compatibility)

# Github-Page

npm run deploy
