# monoJS
The JavaScript framework by monochrome. for everyone.

monochrome.によるみんなのためのJavaScriptのフレームワーク。

---

どうも!JavaScriptのフレームワークがmonochrome.から登場しました！

まぁ、まだAlpha 1なので機能は少ないのはご了承ください。

## できること
- `_newEl`: 要素の作成
- `_`,`__`: 要素の選択(`querySelector()`, `querySelectorAll()`)
- `_attr`: 要素の属性の変更
- `_notNull`: 変数がnullかの確認

しょぼい。まー自分としては結構頑張って作ったよ、、、うん。

## 将来的に実装したいもの
- `_xhr`: XMLHttpRequest
- `_random`: 乱数の生成

こんな感じ？
うん。

## フレームワークの規則
原則、
- 関数の初めは`_`にすす
  - 区別をつけるため
- 引数は
  - 要素を`el`
  - オブジェクト(連想配列)を`obj`
  - 配列は`arr`
  - 目的は`tar`にする
    - ソースコードを見やすくするため
- 引数がオブジェクトなら基本オブジェクトの構成をコメントとして残す
  - 書きやすい→バグが減る・フィックスがしやすくなるから
- すでに実装されたAPIではなくネイティブのJSコードだけを書く
  - バグを防止するため

とする。


# 動作情報
- Firefox 88.1 以降
- Safari 13.1.2
