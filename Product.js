class ProductManager{
    constructor(){
        this.products=[];
        this.id=0;
        
    }
    getproducts(){
        return this.products;
        
    }
    addproducts(tittle,description,price,thumbnail,code,stock){
        if (!tittle || !description || !price || !thumbnail || !code || !stock){
            console.log("Deben colocarse todos los datos")
        }
        
        if (!this.products.some((p)=>p.code=== code)){
            let id=this.id++
            let newproducts={id,tittle,description,price,thumbnail,code,stock};

            this.products.push(newproducts);

            console.log(`El producto ${tittle} fue agregado`)
        } else{ 
            console.log(`Ya se encuentra un producto con el codigo ${code}`);

        }
        
    }
    getproductByid(id){
        let product=this.products.find((p)=>p.id===id)
        return product ? product:null;
    }
}
//Se agregan los productos
const product=new ProductManager()
console.log("------------------------------ ----------")
product.addproducts("Arroz","Grano de arroz",1800, "https://s1.eestatic.com/2021/05/31/actualidad/585453954_186766988_1706x960.jpg",121,300);
product.addproducts("Azucar","Grano de cana de azucar",1200, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elconfidencial.com%2Falma-corazon-vida%2F2017-02-14%2Ftipos-azucar-que-es-glucosa-fructosa-sacarosa_1331040%2F&psig=AOvVaw3k65rspq5xoojY6lQ9QDZV&ust=1702937820949000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCn3_C_l4MDFQAAAAAdAAAAABAD",443,200);
product.addproducts("Rexona","Antitranspirante con olor",600, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.farmaciassanchezantoniolli.com.ar%2Fdesodorantes%2F614-desodorante-antitranspirante-rexona-mujer-nutritive-en-aerosol-150ml-7791293041735.html&psig=AOvVaw1rgGyj9MZKDRpgbKjO_9xW&ust=1702937852604000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDi9_-_l4MDFQAAAAAdAAAAABAL",456,100);
product.addproducts("Harina pan","Harina de maiz precocida",980, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.blogs.es%2F56a235%2Fistock-1006847760%2F450_1000.jpg&tbnid=Ry5tXmYjhq_L_M&vet=12ahUKEwi92rihwJeDAxWwA7kGHbzhDBEQMygEegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.directoalpaladar.com%2Fingredientes-y-alimentos%2Fcomo-se-hace-harina-p-a-n-popular-venezuela-que-recetas-se-utiliza&docid=6k6DcTdicKcv-M&w=450&h=300&q=harina%20pan&ved=2ahUKEwi92rihwJeDAxWwA7kGHbzhDBEQMygEegQIARB8",868,90);
product.addproducts("Leche","Leche pasteurizada completa",490, "https://www.google.com/url?sa=i&url=https%3A%2F%2Frojasglutenfree.com%2Fproductos%2Fleche-entera-clasica-1-litro-la-serenisima%2F&psig=AOvVaw0mo5S_2d6hdNSveAai62BO&ust=1702937955903000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCi0bLAl4MDFQAAAAAdAAAAABAD",256,989);

let mostrar= product.getproducts();
console.log(mostrar);

//Verificamos los code
console.log("----------------------------------------")

product.addproducts("Azucar","Grano de cana de azucar",1200, "imagen",121,200);

//Busqueda de producto por el id
console.log("----------------------------------------")

let findproduct=product.getproductByid(20);

if (findproduct){
    console.log("El producto a localizar es:",findproduct)
} else{console.log("Not Found")}

console.log("----------------------------------------")
let findproduct2=product.getproductByid(2);

if (findproduct2){
    console.log("El producto a localizar es:",findproduct2)
} else{console.log("Not Found")}
