<?php

namespace App\Http\Controllers;

use App\Mail\UserMail;
use App\Mail\CorporateMail;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Validator;

class PostsController extends Controller
{
    public function index()
    {
        // $res = Mail::to("nakamura0803@gmail.com")->send(new UserMail());
        // return response()->json(['page' => 'index']);
    }

    public function csv()
    {
        // $data = Post::all()->toArray();
        // $data = array_map('convertPost', $data);

        $data = Post::all();
        $data = $data->map(function ($post) {
            $post->detail_explain = $post->detail_explain();
            $post->document_send = $post->document_send();
            $post->notification = $post->notification();
            return $post;
        });

        $head = ['id', '詳細説明', '資料送付希望', '名前', 'メール', '電話', '施設名', '部署名', '郵便番号', '都道府県', '市区町村', '番地', '通知を希望する', '作成', '更新'];

        // 書き込み用ファイルを開く
        $data = $data->toArray();
        ob_start();
        $f = fopen('php://output', 'w');
        fputcsv($f, $head);
        foreach ($data as $row) {fputcsv($f, $row);}
        fclose($f);

        $res = ob_get_clean();
        mb_convert_variables('SJIS', 'UTF-8', $res);

        // HTTPヘッダ
        header("Content-Type: application/octet-stream");
        header('Content-Disposition: attachment; filename=list.csv');
        return $res;

    }

    // post
    public function post(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                // 'detail_explain' => 'required',
                // 'document_send' => 'required',
                'name' => 'required',
                'email' => 'required',
                'tel' => 'required',
                'facility' => 'required',
                'department' => 'required',
                'zip_code' => 'required',
                'prefecture' => 'required',
                'city' => 'required',
                'address' => 'required',
                'notification' => 'required',

            ],
            [
                'required' => ':attribute 必須です。',
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //save
        $post = Post::create($request->all());

        //メール送信
        $res = Mail::to($request['email'])->send(new UserMail());
        $res = Mail::to("info.jp@molnlycke.com")->send(new CorporateMail($post));
        return response()->json(['message' => 'success']);
    }
}
