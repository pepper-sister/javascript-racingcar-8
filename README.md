# javascript-racingcar-precourse

## 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

-   주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
-   각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
-   자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
-   사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
-   전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
-   자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
-   우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
-   사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구 사항

**입력**

-   경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
<pre>
    pobi,woni,jun
</pre>

-   시도할 횟수
<pre>
    5
</pre>

**출력**

-   차수별 실행 결과
<pre>
    pobi : --
    woni : ----
    jun : ---
</pre>
-   단독 우승자 안내 문구
<pre>
    최종 우승자 : pobi
</pre>
-   공동 우승자 안내 문구
<pre>
    최종 우승자 : pobi, jun
</pre>

**실행 결과 예시**

<pre>
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    시도할 횟수는 몇 회인가요?
    5

    실행 결과
    pobi : -
    woni : 
    jun : -

    pobi : --
    woni : -
    jun : --

    pobi : ---
    woni : --
    jun : ---

    pobi : ----
    woni : ---
    jun : ----

    pobi : -----
    woni : ----
    jun : -----

    최종 우승자 : pobi, jun
</pre>

##

## 구현할 기능 목록

-   [ ] 입력과 출력
    -   <code>@woowacourse/mission-utils</code>에서 제공하는 <code>Console API</code>의<code>Console.readLineAsync()</code>, <code>Console.print()</code>사용
-   [ ] 각 자동차별 Random 값 추출
    -   <code>@woowacourse/mission-utils</code>에서 제공하는 <code>Random API</code>의<code>Random.pickNumberInRange()</code>사용
    -   0에서 9사이의 무작위 정수
-   [ ] 차수별 실행 결과 출력
    -   무작위 값이 4이상인 경우 전진, '-' 추가
-   [ ] 우승자 안내 문구 출력
    -   우승자가 여러 명인 경우 쉼표(,)로 구분
-   [ ] Error 출력
    -   잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션 종료
