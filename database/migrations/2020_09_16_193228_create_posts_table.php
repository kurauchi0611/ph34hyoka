<?php
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Database\Migrations\Migration;
            
            class CreatePostsTable extends Migration
            {
                /**
                 * Run the migrations.
                 *
                 * @return void
                 */
                public function up()
                {
                    Schema::create("posts", function (Blueprint $table) {
						$table->increments('id');
						$table->text('title')->nullable();
						$table->text('description');
						$table->integer('isPost');
						$table->integer('id_Category')->nullable()->unsigned();
						$table->timestamps();
						$table->softDeletes();
						$table->foreign("id_Category")->references("id")->on("categories");



						// ----------------------------------------------------
						// -- SELECT [posts]--
						// ----------------------------------------------------
						// $query = DB::table("posts")
						// ->leftJoin("Categories","Categories.id", "=", "posts.id_Category")
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
                    Schema::dropIfExists("posts");
                }
            }
        