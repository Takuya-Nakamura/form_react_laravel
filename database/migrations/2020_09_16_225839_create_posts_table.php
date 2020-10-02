<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->increments('id');
            $table->integer('detail_explain')->nullable();
            $table->integer('document_send')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('tel');
            $table->string('facility');
            $table->string('department');
            $table->string('zip_code');
            $table->string('prefecture');
            $table->string('city');
            $table->string('address');
            $table->boolean('notification');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
