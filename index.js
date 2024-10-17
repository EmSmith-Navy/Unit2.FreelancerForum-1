const freelancers = [];
const freelancerListDiv = document.getElementById("freelancer-list");
const averagePriceDiv = document.getElementById("average-price");

function addFreelancer(name, occupation, startingPrice) {
  freelancers.push({ name, occupation, startingPrice });
  updateFreelancerList();
  updateAveragePrice();
}

function updateFreelancerList() {
  freelancerListDiv.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.className = "freelancer";
    freelancerDiv.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
    freelancerListDiv.appendChild(freelancerDiv);
  });
}

function updateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  const average =
    freelancers.length > 0 ? (total / freelancers.length).toFixed(2) : 0;
  averagePriceDiv.textContent = `Average Starting Price: $${average}`;
}

// Simulate adding freelancers dynamically
setTimeout(() => addFreelancer("Alice", "Writer", 30), 1000);
setTimeout(() => addFreelancer("Bob", "Teacher", 50), 3000);
setTimeout(() => addFreelancer("Carol", "Programmer", 70), 5000);

// You can add more freelancers at intervals as needed
