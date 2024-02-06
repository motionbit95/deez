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

  return (
    <div>
      <Userform />
    </div>
  );
};

export default testpage;
