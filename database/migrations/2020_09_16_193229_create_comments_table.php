<?php
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Database\Migrations\Migration;
            
            class CreateCommentsTable extends Migration
            {
                /**
                 * Run the migrations.
                 *
                 * @return void
                 */
                public function up()
                {
                    Schema::create("comments", function (Blueprint $table) {
						$table->increments('id');
						$table->text('text');
						$table->integer('id_post')->nullable()->unsigned();
						$table->timestamps();
						$table->softDeletes();
						$table->foreign("id_post")->references("id")->on("posts");



						// ----------------------------------------------------
						// -- SELECT [comments]--
						// ----------------------------------------------------
						// $query = DB::table("comments")
						// ->leftJoin("posts","posts.id", "=", "comments.id_post")
						// ->get();
						// dd($query); //For checking



                    });
                }
    
                /**
                 * Reverse the migrations.
                 *
                 * @return void
                 */
                public function down()
                {
                    Schema::dropIfExists("comments");
                }
            }
        