### Alert Types

```jsx
<>
	<Alert type="success">
		<h4 class="alert-title">Wow! Everything worked!</h4>
		<div class="text-muted">Your account has been saved!</div>
	</Alert>
	<Alert type="info">
		<h4 class="alert-title">Did you know?</h4>
		<div class="text-muted">
			Here is something that you might like to know.
		</div>
	</Alert>
	<Alert type="warning">
		<h4 class="alert-title">Uh oh, something went wrong</h4>
		<div class="text-muted">
			Sorry! There was a problem with your request.
		</div>
	</Alert>
	<Alert type="danger">
		<h4 class="alert-title">I'm so sorry&hellip;</h4>
		<div class="text-muted">
			Your account has been deleted and can't be restored.
		</div>
	</Alert>
</>
```

### Dismissable Alerts

```jsx
<>
	<Alert type="success" dismissable>
		<h4 class="alert-title">Wow! Everything worked!</h4>
		<div class="text-muted">Your account has been saved!</div>
	</Alert>
</>
```

### Important Alerts

```jsx
<>
	<Alert type="success" important>
		<h4 class="alert-title">Wow! Everything worked!</h4>
		<div class="text-muted">Your account has been saved!</div>
	</Alert>
	<Alert type="info" important>
		<h4 class="alert-title">Did you know?</h4>
		<div class="text-muted">
			Here is something that you might like to know.
		</div>
	</Alert>
	<Alert type="warning" important>
		<h4 class="alert-title">Uh oh, something went wrong</h4>
		<div class="text-muted">
			Sorry! There was a problem with your request.
		</div>
	</Alert>
	<Alert type="danger" important>
		<h4 class="alert-title">I'm so sorry&hellip;</h4>
		<div class="text-muted">
			Your account has been deleted and can't be restored.
		</div>
	</Alert>
</>
```

### Alert with Icon

```jsx
import { Check } from "tabler-icons-react";

<Alert type="success" icon={<Check size={32} color="green" />}>
	<h4 class="alert-title">Wow! Everything worked!</h4>
	<div class="text-muted">Your account has been saved!</div>
</Alert>;
```
