document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.navbtn-all').addEventListener('click', function () {
    showAllProducts();
  });

  document.querySelector('.navbtn-501').addEventListener('click', function () {
    showProductsByClass('sell-501');
  });

  document.querySelector('.navbtn-502').addEventListener('click', function () {
    showProductsByClass('sell-502');
  });

  document.querySelector('.navbtn-505').addEventListener('click', function () {
    showProductsByClass('sell-505');
  });

  document.querySelector('.navbtn-LVC').addEventListener('click', function () {
    showProductsByClass('sell-LVC');
  });
});

function showAllProducts() {
  document.querySelectorAll('.sell').forEach(function (product) {
    product.style.display = 'block';
  });
}

function showProductsByClass(className) {
  document.querySelectorAll('.sell').forEach(function (product) {
    if (product.classList.contains(className)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
