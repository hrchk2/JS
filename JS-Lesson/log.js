let x = 10; //グローバルスコープの変数x。

{
    console.log(x); // グローバルスコープの変数xを取得したい。でもエラー

    let y = 0; //後からブロックスコープで変数xを宣言。
    console.log(y);
}
