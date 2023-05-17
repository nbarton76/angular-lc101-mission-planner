<div class="displayBox">
    <h3>Equipment</h3>
    <ol>
        <li *ngFor="let item of equipmentItems">
            <button [class.active]="item.mass+cargoMass<=maximumAllowedMass && cargoHold.length < maxItems" [disabled]="item.mass+cargoMass>maximumAllowedMass || cargoHold.length >= maxItems" (click)="nearCapacity = addItem(item)">
                Add to Cargo Hold
            </button>
            {{item.name}}, {{item.mass}} kg
        </li>
    </ol>
</div>

<hr>

<div class = "displayBox">
    <h3>Cargo Hold: {{cargoHold.length}}/{{maxItems}} Spots Filled</h3>
    <ol>
        <li *ngFor="let equipment of cargoHold">{{equipment.name}}</li>
    </ol>
    <p>Mass in Hold: {{cargoMass}} kg</p>
    <p [class.nearMaxMass]="nearCapacity">Mass Budget Remaining: {{maximumAllowedMass - cargoMass}} kg</p>
    <button (click)="cargoHold=[]; cargoMass=0; nearCapacity = false">Empty Hold</button>
</div>
