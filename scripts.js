document.addEventListener("DOMContentLoaded", () => {
    // Simulando o armazenamento de ordens de serviço
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Lidar com o login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Aqui, você poderia validar as credenciais e redirecionar para a página de ordens de serviço
            window.location.href = "create-order.html";
        });
    }

    // Lidar com a criação de ordem de serviço
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newOrder = {
                customerName: orderForm.customerName.value,
                device: orderForm.device.value,
                description: orderForm.description.value
            };
            orders.push(newOrder);
            localStorage.setItem("orders", JSON.stringify(orders));
            orderForm.reset();
            alert("Ordem de serviço criada com sucesso!");
        });
    }

    // Exibir ordens de serviço na tabela
    const ordersTable = document.getElementById("ordersTable");
    if (ordersTable) {
        const tbody = ordersTable.querySelector("tbody");
        orders.forEach((order) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${order.customerName}</td><td>${order.device}</td><td>${order.description}</td>`;
            tbody.appendChild(row);
        });
    }
});
