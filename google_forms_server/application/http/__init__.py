from core.ports.form_service import FormServicePort
from .app import app
from .adapter import FormView, CreateFormView

def run(form_service: FormServicePort, **kwargs):
    app.add_url_rule(
        "/forms/new/",
        view_func=CreateFormView.as_view("create_form_view", form_service=form_service),
        methods=["POST"]
    )
    app.add_url_rule("/fojjkdd", view_func=FormView.as_view("form_view", form_service=form_service))

    port = kwargs.get("port", 5000)
    host = kwargs.get("host", "localhost")
    debug = kwargs.get("debug", True)
    app.run(host=host, port=port, debug=debug)