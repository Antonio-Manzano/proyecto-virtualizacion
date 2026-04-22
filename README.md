# 🎨 Art-Platform: Microservicios de Próxima Generación

Plataforma escalable de compra/venta de arte orquestada con **Kubernetes (DOKS)** y **CI/CD Automatizado**.

## Diferenciales de esta Implementación
- **Zero-Downtime Deployment:** Gracias a GitHub Actions y las estrategias de RollingUpdate de K8s.
- **Alta Disponibilidad:** Cada microservicio corre con un mínimo de 3 réplicas.
- **Infraestructura como Código (IaC):** Todo el clúster es replicable mediante los archivos en `/k8s`.

## Stack Tecnológico
- **Cloud:** DigitalOcean (DOKS)
- **Runtime:** Node.js 18 & Python 3.11
- **Registry:** DigitalOcean Container Registry (DOCR)
- **CI/CD:** GitHub Actions (Integración directa con DigitalOcean)

## Arquitectura de Red
- **Auth Service:** Puerto 3000 (JWT Authentication)
- **Catalog Service:** Puerto 4000 (Art Inventory)
- **Payments Service:** Puerto 5000 (Stripe Integration)

---
*Desarrollado por Juan Antonio Manzano Ceja - IT Engineering Student*