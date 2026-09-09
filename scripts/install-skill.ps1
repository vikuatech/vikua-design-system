<#
  Instala o actualiza el Sistema de Diseno Vikua como Agent Skill de Claude Code.

    # En el proyecto actual (versionable con el equipo)
    powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1

    # Para todos tus proyectos (tu maquina)
    powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1 -Scope user

    # Fijado a una version
    powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1 -Ref v1.0.0

  Compatible con Windows PowerShell 5.1.
#>
[CmdletBinding()]
param(
  [ValidateSet("project", "user")] [string] $Scope = "project",
  [string] $Ref = "main",
  [string] $Repo = "git@github.com:vikuatech/vikua-design-system.git"
)

$ErrorActionPreference = "Stop"
$skillName = "vikua-design"

if ($Scope -eq "user") {
  $base = Join-Path $env:USERPROFILE ".claude\skills"
} else {
  $base = Join-Path (Get-Location) ".claude\skills"
}
$target = Join-Path $base $skillName

if (-not (Test-Path $base)) {
  New-Item -ItemType Directory -Force -Path $base | Out-Null
}

if (Test-Path (Join-Path $target ".git")) {
  Write-Host "Actualizando $target a $Ref"
  git -C $target fetch --tags origin
  if ($?) { git -C $target checkout $Ref }
  if ($?) { git -C $target pull --ff-only }
} else {
  if (Test-Path $target) {
    throw "$target existe y no es un clon de git. Muevelo o borralo antes de instalar."
  }
  Write-Host "Clonando $Repo en $target ($Ref)"
  git clone --depth 1 --branch $Ref $Repo $target
}

if (-not (Test-Path (Join-Path $target "SKILL.md"))) {
  throw "No se encontro SKILL.md en $target: la instalacion no quedo completa."
}

Write-Host ""
Write-Host "Listo. Reinicia Claude Code e invoca la skill con /$skillName"
