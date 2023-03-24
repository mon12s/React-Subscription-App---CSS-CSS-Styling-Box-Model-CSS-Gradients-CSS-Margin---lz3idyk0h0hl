import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
                <div class="community">
                  <h2 class="community-header">Join our community</h2>
                  <h3 className="community-sub-header">
                    30-day. hassle-free monkey back gurrantee
                  </h3>
                  <p className="community-text">
                  Gain access to our full library of tutorials along with expert
                    code reviews. Perfect for any developers who are serious about
                    honing their skills.
                  </p>
                </div>
                <div class="card-details">
                  <div class="card">
                    <p class="card-header">Monthly Subscription</p>
                    <div className="price">
                      <span>$29</span>
                      <p>Per Month</p>
                    </div>
                    <p className="card-details-text">
                      Full access for ;ess than $1 a day.
                    </p>
                    <a href="#" className="btn btn-card">
                      Sign up
                    </a>
                  </div>
                  <div class="why-us">
                    <h4 class="why-us-header">Why Us</h4>
                    <div className="why-us-lists">
                      <ul className="why-us-items"> 
                        <li className="why-us-items">Tutorials by industry experts</li>
                        <li className="why-us-items">Peer & expert code review</li>
                        <li className="why-us-items">Coding exercises</li>
                        <li className="why-us-items">Access yo our GitHub repos</li>
                        <li className="why-us-items">Community forum</li>  
                        <li className="why-us-items">Flashcard decks</li>
                      </ul>
                  </div>
                  </div>
                </div>
              </div>
    </div>
  
  );
};

export default App;
