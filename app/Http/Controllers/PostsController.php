<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validate;
use DB;
use App\Models\Post;
use Inertia\Inertia;

use function GuzzleHttp\json_encode;

//=======================================================================
    class PostsController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\View\View
         */
        public function index(Request $request)
        {
            // $posts = Post::all();
            return Inertia::render('Top', ['posts' => Post::orderBy('id','DESC')->get()]);
        }
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\View\View
         */
        public function create($a)
        {
            return Inertia::render('Post', ['posts' => Post::all()]);
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param \Illuminate\Http\Request $request
         *
         * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
         */
        public function store(Request $request)
        {
            print $request->input("text");
            $this->validate($request, [
				"title" => "nullable", //text('title')->nullable()
				"description" => "required", //text('description')
				"isPost" => "required|integer", //integer('isPost')
				"id_Category" => "nullable|integer", //integer('id_Category')->nullable()
            ]);
            $requestData = $request->all();
            Post::create($requestData);
            return redirect('/');
            // return Redirect::route('Index');
            // return Inertia::render('Post', ['posting' => Post::all()]);
            // return redirect("post")->with("flash_message", "post added!");
            // return Inertia::render('PostDetail', ['posts' => $request]);
        }
    
        /**
         * Display the specified resource.
         *
         * @param  int  $id
         *
         * @return \Illuminate\View\View
         */
        public function show($id)
        {
            // print($id);
            return Inertia::render('PostDetail', ['posts' => Post::find($id)]);
        }
        public function category($id)
        {
            return Inertia::render('Post', ['posts' => Post::where('id_Category','=',$id)->get()]);
        }
        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         *
         * @return \Illuminate\View\View
         */
        public function edit($id)
        {
            $post = Post::findOrFail($id);
            return view("post.edit", compact("post"));
        }
        /**
         * Update the specified resource in storage.
         *
         * @param  int  $id
         * @param \Illuminate\Http\Request $request
         *
         * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
         */
        public function update(Request $request, $id)
        {
            $this->validate($request, [
				"title" => "nullable", //text('title')->nullable()
				"description" => "required", //text('description')
				"isPost" => "required|integer", //integer('isPost')
				"id_Category" => "nullable|integer", //integer('id_Category')->nullable()

            ]);
            $requestData = $request->all();
            
            $post = Post::findOrFail($id);
            $post->update($requestData);
    
            return redirect("post")->with("flash_message", "post updated!");
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         *
         * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
         */
        public function destroy($id)
        {
            Post::destroy($id);
            return redirect("post")->with("flash_message", "post deleted!");
        }
    }
    //=======================================================================
    
    