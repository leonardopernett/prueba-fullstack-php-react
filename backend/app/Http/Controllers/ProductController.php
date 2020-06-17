<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use DateTime;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products= Product::all();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Product::create($request->all());
        return [
            'mensaje'=>'producto creado'
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        $d = new DateTime();
        $product->fecha_ultima_venta = $d->format('Y-m-d\TH:i:s.u');
        $product->stock =$product->stock - 1 ;
        $product->save();
        return $product;
    }


    public function obtener($id){
        $product = Product::find($id);
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
         $product= Product::find($id);
         $product->fill($request->all())->save();
         return [
             "mensaje"=>"producto actualizado"
         ];

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return [
            "mensaje"=>"producto eliminado"
        ];
    }
}
