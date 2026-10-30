# 프라이머 설계 실습

충남대학교 생명시스템과학대학 · 생명과학실험 10주차

노트북과 브라우저만 있으면 되는 실습입니다. 실제 qPCR은 하지 않고, **qPCR 프라이머를 설계하고, 어디에 붙는지 확인하고, 반응 조건을 정하는 것**까지 합니다.

## 시작하기

| 문서 | 내용 |
|---|---|
| [10주차 따라하기](week10/README.md) | Part 1 이론 → Part 2 실습. 위에서부터 순서대로 읽으며 따라오세요 |
| [NCBI 찾아가기 안내](week10/ncbi-guide.md) | 유전자 서열 직접 찾는 법, RefSeq · CDS 뜻 |
| [기록지](week10/worksheet.md) | 보고서에 꼭 들어갈 항목과 제출 형식 |

## 웹 도구

https://jw-huh.github.io/primer-design-lab/ — 설치 없이 바로 열립니다.

| 도구 | 하는 일 |
|---|---|
| 순서 | 도구 | 하는 일 |
|---|---|---|
| 1 | [유전자 핀볼](https://jw-huh.github.io/primer-design-lab/pinball.html) | 학번을 넣으면 차차가 오늘 설계할 유전자를 골라 주고, mRNA와 gDNA 링크를 줌 |
| 2 | [엑손 찾기](https://jw-huh.github.io/primer-design-lab/align.html) | mRNA와 gDNA를 맞대어 엑손(exon)·인트론(intron) 찾기, 경계 주변 서열 |
| 3 설계 | [역상보](https://jw-huh.github.io/primer-design-lab/revcomp.html) | 상보 · 역순 · 역상보 변환 |
| 3 설계 | [Tm 계산기](https://jw-huh.github.io/primer-design-lab/tm.html) | Wallace, 기본 GC 식, nearest-neighbor 세 가지로 Tm 계산 |
| 3 설계 | [서열 뷰어](https://jw-huh.github.io/primer-design-lab/viewer.html) | 두 가닥 서열에 프라이머 결합 위치, 앰플리콘 표시 |
| 4 | [프라이머 점검](https://jw-huh.github.io/primer-design-lab/check.html) | 반복 서열, 머리핀, 이합체, 회문(제한효소 자리) 확인 |
| 5 | [PCR 시뮬레이션](https://jw-huh.github.io/primer-design-lab/pcr.html) | PCR 프로그램(온도·시간·사이클)을 정해 가상 젤, 증폭 곡선, Tm 곡선. 비슷한 서열을 가진 다른 유전자 전사체까지 함께 넣은 cDNA·gDNA·NTC 레인 |
| 6 | [채점·제출](https://jw-huh.github.io/primer-design-lab/score.html) | 100점 만점 채점, 제출하면 Primer-BLAST 링크가 열리고 두 쌍 비교 |

## 수업에서 쓰는 무료 도구

| 도구 | 하는 일 |
|---|---|
| [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nuccore/) | 유전자 서열 찾기 |
| [BLAST · Align two sequences](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastSearch&PROGRAM=blastn&BLAST_SPEC=blast2seq&LINK_LOC=align2seq) | mRNA와 gDNA 맞대기 |
| Primer-BLAST | 컴퓨터가 설계한 프라이머. 채점·제출 뒤에 링크가 열림 |

모두 가입 없이 쓸 수 있습니다.

## 수업 약속

실습 시간에는 생성형 AI에게 프라이머 설계나 기록지 답을 맡기지 않습니다. 이 실습에서 배우는 것은 결과가 아니라 **도구의 결과를 읽고 판단하는 과정**입니다. 기록지의 "내 말로 답하기"는 선생님이 수업 중에 짧게 물어볼 수 있습니다.

자료: 허지원 (jwhuh@cnu.ac.kr) · 자료 CC BY 4.0 · 차차 캐릭터 © 충남대학교
