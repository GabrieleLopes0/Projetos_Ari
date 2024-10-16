var carrinho = {}; 
  var total = 0;

  function allowDrop(event) {
    event.preventDefault(); 
  }

  function drag(event) {
    event.dataTransfer.setData("produtoID", event.target.id);
  }
 function drop(event) {

    event.preventDefault();

    var produtoID = event.dataTransfer.getData("produtoID"); 
    var produto = document.getElementById(produtoID);
    var preco = parseFloat(produto.getAttribute("data-preco"));
    
    if (carrinho[produtoID]) {
      
      carrinho[produtoID].quantidade += 1;
      
    } else {
      
      carrinho[produtoID] = {
        nome: produto.innerText, 
        preco: preco, 
        quantidade: 1, 
      };
    }

    total += preco; 
    document.getElementById("total").innerText = total.toFixed(2);
    
    atualizarCarrinho();
  }

  function dropRemove(event) {
    event.preventDefault();
    var produtoID = event.dataTransfer.getData("produtoID");


    if (carrinho[produtoID]) {
      var preco = carrinho[produtoID].preco; 
      carrinho[produtoID].quantidade -= 1;
      total -= preco;
      document.getElementById("total").innerText = total.toFixed(2);

      if (carrinho[produtoID].quantidade === 0) {

        delete carrinho[produtoID];
      }

      atualizarCarrinho();
    }
  }

  function atualizarCarrinho() {
    var carrinhoDiv = document.getElementById("carrinho");
    carrinhoDiv.innerHTML = ""; 

    for (var produtoID in carrinho) {
      var item = carrinho[produtoID];
      var carrinhoItem = document.createElement("div");
      carrinhoItem.className = "carrinho-item";
      carrinhoItem.draggable = true;
      carrinhoItem.ondragstart = drag; 
      carrinhoItem.id = produtoID;
      carrinhoItem.innerHTML = `${item.nome} <span> ${
        item.quantidade
      }x - R$ ${(item.preco * item.quantidade).toFixed(2)} </span>`;

      carrinhoDiv.appendChild(carrinhoItem);
    }

    if (Object.keys(carrinho).length === 0) {

      carrinhoDiv.innerHTML = "<p> Arraste os produtos aqui </p>";
    }

  }

