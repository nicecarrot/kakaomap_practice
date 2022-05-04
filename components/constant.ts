// 이 파일은 components에서 사용할 단어들이나 다른 컴포넌트들을 선언하고 import해서 쓸 수 있게 만든 파일입니다.

/* header에서 사용할 단어 */
export const LOGO = `It's on Sale!`;
export const NAVI_CONTENTS = ["CU", "GS25", "EMART24", "7ELEVEN", "MINISTOP"];
export const SELECT_BRAND_CONTENTS = [
  { value: "", brand: "브랜드" },
  { value: "cu", brand: "CU" },
  { value: "gs25", brand: "GS25" },
  { value: "emart24", brand: "EMART24" },
  { value: "7eleven", brand: "7ELEVEN" },
  { value: "ministop", brand: "MINISTOP" },
];
export const SELECT_EVENT_CONTENTS = [
  { value: "", event: "행사종류" },
  { value: "1+1", event: "1+1" },
  { value: "2+1", event: "2+1" },
  { value: "add", event: "덤증정" },
  { value: "dc", event: "가격할인" },
];

/* Badge Brand */
interface BADGEPROPS {
  brand: string;
  key: string;
}

export const BADGE_BRANDS: BADGEPROPS[] = [
  { brand: "CU", key: "cu" },
  { brand: "GS25", key: "gs25" },
  { brand: "7ELEVEN", key: "seven" },
  { brand: "MINISTOP", key: "ministop" },
  { brand: "EMART", key: "emart" },
];

/* select sales */
interface Sales {
  value: string;
  label: string;
}

export const SalesOption: Sales[] = [
  { value: "전체", label: "전체" },
  { value: "1+1", label: "1+1" },
  { value: "2+1", label: "2+1" },
];

/* Section */
interface Carousel {
  key: string
  image: string
}

export const CarouselData: Carousel[] = [
  {
    key: "zero",
    image:
      "https://post-phinf.pstatic.net/MjAyMTAyMDFfMTAg/MDAxNjEyMTQ0ODg3Mzk2.5T4Quktcoi1BY9iJ-n8kwAJJd-0B33RzO9PxnKU1PEcg.5MhJhrXwpCR8ET4XyjSSHhk1ZfT77NbKdbCZRLR54C8g.JPEG/2.jpg?type=w1200",
  },

  {
    key: "one",
    image:
      "https://post-phinf.pstatic.net/MjAyMTAyMDFfNiAg/MDAxNjEyMTQ1MDI5NDk5.VxEvisecUPocB4wEz_kEzt2-LEqDP11r4xMnC1nVk5cg.hlkjPj4yv9hlZn2WQtreQGcWVEuRk1P2ZxiQaes-4o0g.JPEG/4.jpg?type=w1200",
  },
  {
    key: "two",
    image:
      "https://post-phinf.pstatic.net/MjAyMTAyMDFfMjYy/MDAxNjEyMTQ1NTcxMTA5.HqUqhf4VGOzTJwAY1ZpfcEJsHIAR8xa_KhNPyc_wpNYg.BXMLQLF8KvG6bjRuhN8nhiqVxH92jgYoTJ5sYQisDTog.JPEG/14.jpg?type=w1200",
  },
];

/* product */
export const WON = "원";
