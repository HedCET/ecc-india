import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { isInt } from "validator";
import { Subscription } from "rxjs";

@Component({
  selector: "donate",
  styleUrls: ["./donate.component.css"],
  templateUrl: "./donate.component.html",
})
export class DonateComponent implements OnInit {
  private subscription = new Subscription();

  id = 0;
  loading = false;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.activatedRoute.params.subscribe(({ id }) => {
        if (isInt(id || "")) this.id = +id;
        else {
          const [{ path: id }] = this.activatedRoute.snapshot.url;
          if (isInt(id || "")) this.id = +id;
        }

        console.log(this.id);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
