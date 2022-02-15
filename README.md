# make-npm
It is a package module that checks valid values.

0. https://www.npmjs.com/ 사이트 회원가입
1. npm init : 새로운 프로젝트 생성
2. package name : 이름을 설정한다. @---/------ 를 사용하면 @---/ 사이에 값으로 스코프를 설정 가능(가입한 username으로 사용하면 됨), 중복이 발생하면 public 배포가 불가능
3. version : version을 설정한다. 같은 버전으로는 배포가 불가능
4. entry point : 해당 모듈이 실행될 때 가장 먼저 실행되는 파일
5. 초기설정은 package.json에 기록되는 것으로 바꾸는 것이 가능하다.
6. entry point 에 설정한 파일을 생성하고 원하는 로직을 작성.
7. npm login
8. npm publish --access public ( private 는 유료 ) (패키지명 중복이나 proxy같은 문제가 발생 할 수 있음)
9. 배포 되었다면 다른 곳에서 npm install (package name) 을 통해 받아서 사용하면 된다.


# version

* 1.0.0 : make npm public access  
