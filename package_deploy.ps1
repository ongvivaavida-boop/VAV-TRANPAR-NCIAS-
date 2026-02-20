$source = "c:\Users\media\OneDrive\Desktop\TRANSPARECIA VAV SITE"
$tempDir = "c:\Users\media\OneDrive\Desktop\VAV_TEMP_DEPLOY"
$destinationZip = "c:\Users\media\OneDrive\Desktop\TRANSPARECIA_VAV_SITE_DEPLOY.zip"

# Clean up previous attempts
if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
if (Test-Path $destinationZip) { Remove-Item -Force $destinationZip }

# Create temp dir
New-Item -ItemType Directory -Force -Path $tempDir

# Copy files excluding node_modules and .git
Get-ChildItem -Path $source -Recurse | Where-Object { 
    $_.FullName -notmatch "\\node_modules\\" -and 
    $_.FullName -notmatch "\\.git\\" -and
    $_.FullName -notmatch "\\dist\\"
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($source.Length)
    $targetPath = Join-Path $tempDir $relativePath
    
    if ($_.PSIsContainer) {
        if (-not (Test-Path $targetPath)) {
            New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
        }
    }
    else {
        Copy-Item -Path $_.FullName -Destination $targetPath -Force
    }
}

# Compress
Compress-Archive -Path "$tempDir\*" -DestinationPath $destinationZip -Force

# Cleanup temp
Remove-Item -Recurse -Force $tempDir

Write-Host "ZIP criado com sucesso em: $destinationZip"
$source = "c:\Users\media\OneDrive\Desktop\TRANSPARECIA VAV SITE"
$tempDir = "c:\Users\media\OneDrive\Desktop\VAV_TEMP_DEPLOY"
$destinationZip = "c:\Users\media\OneDrive\Desktop\TRANSPARECIA_VAV_SITE_DEPLOY.zip"

# Clean up previous attempts
if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
if (Test-Path $destinationZip) { Remove-Item -Force $destinationZip }

# Create temp dir
New-Item -ItemType Directory -Force -Path $tempDir

# Copy files excluding node_modules and .git
# Using generic copy with exclusion logic to avoid robocopy exit code issues in automation
Get-ChildItem -Path $source -Recurse | Where-Object { 
    $_.FullName -notmatch "\\node_modules\\" -and 
    $_.FullName -notmatch "\\.git\\" -and
    $_.FullName -notmatch "\\dist\\"
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($source.Length)
    $targetPath = Join-Path $tempDir $relativePath
    
    if ($_.PSIsContainer) {
        if (-not (Test-Path $targetPath)) {
            New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
        }
    }
    else {
        Copy-Item -Path $_.FullName -Destination $targetPath -Force
    }
}

# Compress
Compress-Archive -Path "$tempDir\*" -DestinationPath $destinationZip -Force

# Cleanup temp
Remove-Item -Recurse -Force $tempDir

Write-Host "ZIP criado com sucesso em: $destinationZip"
