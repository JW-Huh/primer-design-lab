# 프라이머 설계 실습

충남대학교 생명시스템과학대학 · 생명과학실험 10주차

노트북과 브라우저만 있으면 되는 실습입니다. 실제 qPCR은 하지 않고, **qPCR 프라이머를 설계하고, 어디에 붙는지 확인하고, 반응 조건을 정하는 것**까지 합니다.

## 시작하기

| 문서 | 내용 |
|---|---|
| [10주차 따라하기](week10/README.md) | Part 1 이론 → Part 2 실습. 위에서부터 순서대로 읽으며 따라오세요 |
| [NCBI 찾아가기 안내](week10/ncbi-guide.md) | 유전자 서열 직접 찾는 법, RefSeq · CDS 뜻 |
| [기록지](week10/worksheet.md) | 실습하면서 채우는 기록지. 제출 형식은 맨 아래 "제출 안내" |

## 웹 도구

https://jw-huh.github.io/primer-design-lab/ — 설치 없이 바로 열립니다.

| 도구 | 하는 일 |
|---|---|
| [유전자 핀볼](https://jw-huh.github.io/primer-design-lab/pinball.html) | 학번을 넣으면 차차가 오늘 설계할 유전자를 골라 줌 |
| [프라이머 점검](https://jw-huh.github.io/primer-design-lab/check.html) | 반복 서열, 머리핀, 이합체, 회문(제한효소 자리) 확인 |
| [Tm 계산기](https://jw-huh.github.io/primer-design-lab/tm.html) | Wallace, 기본 GC 식, nearest-neighbor 세 가지로 Tm 계산 |
| [서열 뷰어](https://jw-huh.github.io/primer-design-lab/viewer.html) | 두 가닥 서열에 프라이머 결합 위치, 앰플리콘, qPCR 조건 표시 |
| [PCR 시뮬레이션](https://jw-huh.github.io/primer-design-lab/pcr.html) | 결합 온도·2차 구조·산물 길이를 반영한 가상 젤과 녹는점 곡선. gDNA 레인(심화) |
| [엑손 찾기](https://jw-huh.github.io/primer-design-lab/align.html) | mRNA와 gDNA를 맞대어 엑손·인트론 찾기, 프라이머 사이 인트론과 gDNA 산물 크기 (심화) |
| [역상보](https://jw-huh.github.io/primer-design-lab/revcomp.html) | 상보 · 역순 · 역상보 변환 |

## 수업에서 쓰는 무료 도구

| 도구 | 하는 일 |
|---|---|
| [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nuccore/) | 유전자 서열 찾기 |
| [Primer-BLAST](https://www.ncbi.nlm.nih.gov/tools/primer-blast/) | 프라이머 설계와 특이성 확인 |

모두 가입 없이 쓸 수 있습니다.

## 수업 약속

실습 시간에는 생성형 AI에게 프라이머 설계나 기록지 답을 맡기지 않습니다. 이 실습에서 배우는 것은 결과가 아니라 **도구의 결과를 읽고 판단하는 과정**입니다. 기록지의 "내 말로 답하기"는 선생님이 수업 중에 짧게 물어볼 수 있습니다.

자료: 허지원 (jwhuh@cnu.ac.kr) · 자료 CC BY 4.0 · 차차 캐릭터 © 충남대학교
