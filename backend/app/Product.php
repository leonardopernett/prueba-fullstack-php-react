<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
protected $fillable = ['nombre', 'referencia','precio','peso','categoria','stock','fecha_ultima_venta'];
}
