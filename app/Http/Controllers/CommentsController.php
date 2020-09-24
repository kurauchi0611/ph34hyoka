<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validate;
use DB;
use App\Comment;

//=======================================================================
class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $keyword = $request->get("search");
        $perPage = 25;

        if (!empty($keyword)) {
            $comment = Comment::where("id", "LIKE", "%$keyword%")->orWhere("text", "LIKE", "%$keyword%")->orWhere("id_post", "LIKE", "%$keyword%")->paginate($perPage);
        } else {
            $comment = Comment::paginate($perPage);
        }
        return view("comment.index", compact("comment"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view("comment.create");
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
        $this->validate($request, [
            "text" => "required", //text('text')
            "id_post" => "nullable|integer", //integer('id_post')->nullable()

        ]);
        $requestData = $request->all();

        Comment::create($requestData);

        return redirect("comment")->with("flash_message", "comment added!");
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
        $comment = Comment::findOrFail($id);
        return view("comment.show", compact("comment"));
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
        $comment = Comment::findOrFail($id);

        return view("comment.edit", compact("comment"));
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
            "text" => "required", //text('text')
            "id_post" => "nullable|integer", //integer('id_post')->nullable()

        ]);
        $requestData = $request->all();

        $comment = Comment::findOrFail($id);
        $comment->update($requestData);

        return redirect("comment")->with("flash_message", "comment updated!");
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
        Comment::destroy($id);

        return redirect("comment")->with("flash_message", "comment deleted!");
    }
}
    //=======================================================================
