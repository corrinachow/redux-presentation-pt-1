#### Declarative Rendering

- Completely recreating the UI on every update is inefficient
- Render a component returns _descriptions_ of what the UI should look like now
- React uses those descriptions to update the UI efficiently

#### One-Way Data Flow

- Components pass data to their children
- Components rendering is based on internal state plus data from parent
- Predictable top-down data flow makes it easier to understand reason for UI contents
