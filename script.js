//ページが読み込まれた時、以下の内容を実行する。
window.addEventListener("load" , function (){

    //varは再宣言可能な変数を宣言する。
    var message = "message";

    //このように再宣言が許されている。
    var message = "テスト";

    //letは再宣言不可能変数を宣言する。ここで作ったnameは再度宣言することはできない。
    let name = "Taro";

    //このコメントアウトを外すとエラーになる。
    //let name = "Tom";

    //constは定数。再宣言も値の再設定も許されない。
    const POWER = 10;

    //このコメントアウトを外すとエラーになる。
    //POWER = 20;
    //POWER = POWER + 30;
    //const POWER = 50;
    
    
    let str_number = "10";
    let number = 10;

    if (str_number == POWER){
        console.log("型が違うにもかかわらず、このように=を2個で条件式を書くと一致してしまう。");
    }

    if (str_number === POWER){
        console.log("ここはfalseになる。");
    }
    else{
        console.log("型の違いまで判定したいのであれば、このように=を3個並べて条件式を書く。");
    }

    if (number === POWER){
        console.log("型の違いまで判定したいのであれば、このように=を3個並べて条件式を書く。");
    }


    //配列型のループで1つずつ取り出したい場合、for of を使うと良い。

    let students    = ["Taro","Tom","Mike","Bob"];

    //添字を指定してループする方法
    for (let i=0;i<students.length;i++){
        console.log(students[i]);
    }

    //for ofを使って中身を1つずつ取り出す方法
    for (let student of students){
        console.log(student);
    }


});

