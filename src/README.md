# Node.js(express) & DB(Postgress)テンプレート
PrettierやESLintも設定済み

# 環境構築
Dockerを用いています。
`docker-compose up -d`
で実行してください。

postgressコンテナはDBを作成するために

```
psql -U postgres
CREATE DATABASE signinwithapple;
```
を実行してください。
# 参考資料
TypeORMチュートリアル：https://typeorm.io/


# 実行方法
## 動くか試す
```
$ yarn dev
```

## コンパイルして吐き出す
```
$ yarn build
```
## コンパイル済みのものを実行する
```
$ yarn start
```
## コードをフォーマットする
```
$ yarn format
```