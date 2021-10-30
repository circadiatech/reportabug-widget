import React from "react";

export function BottomSheet() {
    return (
        <div>
            <div class="header">
                <h1>Reporting A Bug</h1>
                <span>X</span>
            </div>
            <div>
                <form>
                    <div>
                        <label>Title *</label>
                        <input type="text" placeholder="Explain your feedback..." />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea type="text" placeholder="Enter Report Description..."></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
