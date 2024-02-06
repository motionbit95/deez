import React from "react";
import Userform from "../component/Userform";

const testpage = () => {
  // ES6(Javascript) 문법
  // 1. const, let, var(요즘 안씀)
  function test() {
    const a = 10;
    //const a; // error
    // let b = 20;
    let b; // null
  }

  // 2. 템플릿 문자열
  function test2() {
    const a = "hello";
    const b = `${a} world`;
    console.log(b);
  }

  // 3. 객체 리터럴
  function test3() {
    const a = {
      name: "홍길동",
      age: 20,
      number() {
        return a.age;
      },
    };
    console.log(a.name);
  }

  // 4. 화살표
  function add(a, b) {
    return a + b;
  }

  const add2 = (a, b) => {
    return a + b;
  };

  const add3 = (a, b) => a + b;

  // 5. 구조 분배
  const user = {
    name: "홍길동",
    age: 20,
    email: "5oXuH@example.com",
    password: "1234",
  };

  function test5() {
    // const { name } = user;
    // user.name;
    // const user1 = new User("이름", "나이", "이메일", "패스워드");
    // user1.changeName("바뀐이름!");
  }

  // 6. 클래스
  class User {
    constructor(name, age, email, password) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.password = password;
    }

    changeName(name) {
      this.name = name;
    }
  }

  // 7. 프로미스(실행을 바로 하되 값은 나중에 받을 때 사용)
  function test7() {
    // 오래 걸리는 함수
    const isSuccess = getName();
    // isSuccess 값이 Promise 가 된다.
    const promise = new Promise((resolve, reject) => {
      if (isSuccess) resolve("완료");
      else reject("실패");
    });

    // promise를 기다리는 어딘가.....
    promise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("끝났습니다.");
      });
  }

  // 8. async / await
  async function getName() {
    return "박진영";
  }

  async function test8() {
    const name = await getName();
    console.log(name);
  }

  // 9. 배열
  function test9() {
    // Array
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];
    console.log(c); // [1, 2, 3, 4, 5, 6]

    let array = [
      { name: "홍길동", age: 20 },
      { name: "박진영", age: 21 },
      { name: "홍길동", age: 20 },
    ];

    // Map - 객체와 유사
    // 순서 보장, 중복 가능, 반복문 사용 가능
    const map = new Map();

    // 데이터 추가
    map.set("name", "홍길동");
    map.set("age", 20);
    console.log(map);

    array = [...array, map];

    map.forEach((key, value) => console.log(key, value));

    // 데이터 가지고오기
    map.get("name"); // 홍길동
    map.get("age"); // 20

    // 데이터 삭제
    map.delete("age");

    // 데이터 변경
    map.set("name", "박진영");

    // 데이터가 있나요??
    map.has("name"); // true
    map.has("age"); // false

    // map 사이즈를 가지고 오거나, 설정할 수 있다.
    //map.size; // 1
    //map.size = 3;

    // map 다 삭제
    map.clear();

    array.map((value, index) => {
      console.log(value.name, index);
      console.log(value.age, index);
    });

    // set - 배열과 유사
    // 중복 허용 X, 반복문 사용 가능

    const set = new Set();
    set.add("name");
    set.add("age");
    set.add("phone");

    // ["name", "age", "phone"]
    set.add("name");
    // ["name", "age", "phone"]

    set.forEach((element) => {
      console.log(element);
    });

    const size = set.size;

    set.delete("name");
    set.has("name"); // false
    set.clear();

    // set -> array
    const _set = new Set(_array);
    // array -> set
    const _array = Array.from(_set);
  }

  // 10. 널 병합 / 옵셔널 체인징
  function test10() {
    // ?
    // ?? -> null ? undefined ? -> 조건만 따져
    // ?. -> 값이 없으면 실행을 안해. null ? undefined ? NaN(10 / 0) ? 0 ? "" ? false

    const age = 25;
    const isYoung = age < 20;
    const name = isYoung ? "어려" : "늙었어";

    const obj = { name: "홍길동", age: 20 };
    console.log(obj.name);
    console.log(obj?.address?.street);
  }

  return (
    <div>
      <Userform />
    </div>
  );
};

export default testpage;
